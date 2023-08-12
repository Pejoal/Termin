<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReplyRequest;
use App\Jobs\CommentRepliedEmailJob;
use App\Models\Comment;
use App\Models\Reply;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ReplyController extends Controller {
  public function index(Request $request, Comment $comment) {
    $replies = $comment->replies()->with('user')->latest()->paginate(15)->through(function ($reply) {
      return [
        'id' => $reply->id,
        'content' => $reply->content,
        'likes' => $reply->likes()->count(),
        'author' => $reply->user->firstname,
        'authorPhoto' => $reply->user->profile_photo_url,
        'canLikeReply' => !$reply->likedBy(auth()->user()),
        'canUpdateReply' => auth()->user()->can('update', Reply::find($reply->id)),
      ];
    });

    if ($request->wantsJson()) {
      return response()->json([
        'data' => $replies->items(),
        'links' => [
          'next' => $replies->nextPageUrl(),
        ],
      ]);
    }
    return Inertia::render('Replies/Index', [
      'replies' => $replies->items(),
      'comment' => [
        'id' => $comment->id,
        'content' => $comment->content,
        'author' => $comment->user->firstname,
        'authorUsername' => $comment->user->username,
        'canLikeComment' => !$comment->likedBy(auth()->user()),
        'canUpdateComment' => auth()->user()->can('update', $comment),
      ],
    ]);
  }

  public function store(ReplyRequest $request, Comment $comment): RedirectResponse {

    $request->user()->replies()->create([
      'comment_id' => $comment->id,
      'content' => $request->content,
    ]);

    // CommentRepliedEmailJob::dispatch($request->user(), $comment); // Process Email Sending in The Queue

    return Redirect::back();
  }

}