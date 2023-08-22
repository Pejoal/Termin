var _a;
import axios from "axios";
import { createApp, h as h$1 } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { i18nVue, trans } from "laravel-vue-i18n";
const php_ar = {
  "auth.failed": "هذه البيانات لا تتطابق مع سجلاتنا.",
  "auth.password": "كلمة المرور التي تم توفيرها غير صحيحة.",
  "auth.throttle": "الكثير من محاولات تسجيل الدخول. يرجى المحاولة مرة أخرى بعد :seconds ثانية.",
  "pagination.previous": "&laquo; السابق",
  "pagination.next": "التالي &raquo;",
  "passwords.reset": "تم إعادة تعيين كلمة المرور الخاصة بك!",
  "passwords.sent": "لقد قمنا بإرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني!",
  "passwords.throttled": "يرجى الانتظار قبل إعادة المحاولة.",
  "passwords.token": "رمز إعادة تعيين كلمة المرور هذا غير صالح.",
  "passwords.user": "لا يمكننا العثور على مستخدم بهذا البريد الإلكتروني.",
  "validation.accepted": "يجب قبول :attribute.",
  "validation.accepted_if": "يجب قبول :attribute عندما يكون :other هو :value.",
  "validation.active_url": ":attribute ليس عنوان URL صالحًا.",
  "validation.after": ":attribute يجب أن يكون تاريخًا بعد :date.",
  "validation.after_or_equal": ":attribute يجب أن يكون تاريخًا بعد أو يساوي :date.",
  "validation.alpha": ":attribute يجب أن يحتوي على أحرف فقط.",
  "validation.alpha_dash": ":attribute يجب أن يحتوي على أحرف وأرقام وشرطات وشرطات سفلية فقط.",
  "validation.alpha_num": ":attribute يجب أن يحتوي على أحرف وأرقام فقط.",
  "validation.array": ":attribute يجب أن يكون مصفوفة.",
  "validation.ascii": ":attribute يجب أن يحتوي على أحرف أبجدية وأرقام أحادية البايت ورموز فقط.",
  "validation.before": ":attribute يجب أن يكون تاريخًا قبل :date.",
  "validation.before_or_equal": ":attribute يجب أن يكون تاريخًا قبل أو يساوي :date.",
  "validation.between.array": ":attribute يجب أن يحتوي على بين :min و :max عنصرًا.",
  "validation.between.file": "يجب أن يكون حجم :attribute بين :min و :max كيلوبايت.",
  "validation.between.numeric": "يجب أن يكون :attribute بين :min و :max.",
  "validation.between.string": "يجب أن يكون طول :attribute بين :min و :max حرفًا.",
  "validation.boolean": "يجب أن يكون حقل :attribute صحيحًا أو خطأ.",
  "validation.confirmed": "تأكيد :attribute غير متطابق.",
  "validation.current_password": "كلمة المرور غير صحيحة.",
  "validation.date": ":attribute ليس تاريخًا صالحًا.",
  "validation.date_equals": ":attribute يجب أن يكون تاريخًا يساوي :date.",
  "validation.date_format": ":attribute لا يتطابق مع الشكل :format.",
  "validation.decimal": ":attribute يجب أن يحتوي على :decimal أماكن عشرية.",
  "validation.declined": "يجب رفض :attribute.",
  "validation.declined_if": "يجب رفض :attribute عندما يكون :other هو :value.",
  "validation.different": ":attribute و :other يجب أن يكونا مختلفين.",
  "validation.digits": ":attribute يجب أن يحتوي على :digits أرقام.",
  "validation.digits_between": ":attribute يجب أن يكون بين :min و :max أرقام.",
  "validation.dimensions": ":attribute يحتوي على أبعاد صورة غير صالحة.",
  "validation.distinct": "حقل :attribute يحتوي على قيمة مكررة.",
  "validation.doesnt_end_with": ":attribute لا يمكن أن ينتهي بأحد القيم التالية: :values.",
  "validation.doesnt_start_with": ":attribute لا يمكن أن يبدأ بأحد القيم التالية: :values.",
  "validation.email": ":attribute يجب أن يكون عنوان بريد إلكتروني صالحًا.",
  "validation.ends_with": ":attribute يجب أن ينتهي بأحد القيم التالية: :values.",
  "validation.enum": "القيمة المختارة :attribute غير صالحة.",
  "validation.exists": "القيمة المحددة :attribute غير صالحة.",
  "validation.file": ":attribute يجب أن يكون ملفًا.",
  "validation.filled": "يجب أن يحتوي حقل :attribute على قيمة.",
  "validation.gt.array": ":attribute يجب أن يحتوي على أكثر من :value عنصر.",
  "validation.gt.file": "يجب أن يكون حجم :attribute أكبر من :value كيلوبايت.",
  "validation.gt.numeric": "يجب أن يكون :attribute أكبر من :value.",
  "validation.gt.string": "يجب أن يكون طول :attribute أكبر من :value حرفًا.",
  "validation.gte.array": ":attribute يجب أن يحتوي على :value عنصر أو أكثر.",
  "validation.gte.file": "يجب أن يكون حجم :attribute أكبر من أو يساوي :value كيلوبايت.",
  "validation.gte.numeric": "يجب أن يكون :attribute أكبر من أو يساوي :value.",
  "validation.gte.string": "يجب أن يكون طول :attribute أكبر من أو يساوي :value حرفًا.",
  "validation.image": ":attribute يجب أن يكون صورة.",
  "validation.in": ":attribute المحدد غير صالح.",
  "validation.in_array": "حقل :attribute لا يوجد في :other.",
  "validation.integer": ":attribute يجب أن يكون عددًا صحيحًا.",
  "validation.ip": ":attribute يجب أن يكون عنوان IP صالحًا.",
  "validation.ipv4": ":attribute يجب أن يكون عنوان IPv4 صالحًا.",
  "validation.ipv6": ":attribute يجب أن يكون عنوان IPv6 صالحًا.",
  "validation.json": ":attribute يجب أن يكون سلسلة JSON صالحة.",
  "validation.lowercase": ":attribute يجب أن تكون جميع الأحرف صغيرة.",
  "validation.lt.array": ":attribute يجب أن يحتوي على أقل من :value عنصر.",
  "validation.lt.file": "يجب أن يكون حجم :attribute أقل من :value كيلوبايت.",
  "validation.lt.numeric": "يجب أن يكون :attribute أقل من :value.",
  "validation.lt.string": "يجب أن يكون طول :attribute أقل من :value حرفًا.",
  "validation.lte.array": ":attribute لا يجب أن يحتوي على أكثر من :value عنصر.",
  "validation.lte.file": "يجب أن يكون حجم :attribute أقل من أو يساوي :value كيلوبايت.",
  "validation.lte.numeric": "يجب أن يكون :attribute أقل من أو يساوي :value.",
  "validation.lte.string": "يجب أن يكون طول :attribute أقل من أو يساوي :value حرفًا.",
  "validation.mac_address": ":attribute يجب أن يكون عنوان MAC صالح.",
  "validation.max.array": ":attribute لا يجب أن يحتوي على أكثر من :max عنصر.",
  "validation.max.file": "يجب أن لا يكون حجم :attribute أكبر من :max كيلوبايت.",
  "validation.max.numeric": "يجب أن لا يكون :attribute أكبر من :max.",
  "validation.max.string": "يجب أن لا يكون طول :attribute أكبر من :max حرفًا.",
  "validation.max_digits": ":attribute يجب ألا يحتوي على أكثر من :max أرقام.",
  "validation.mimes": ":attribute يجب أن يكون ملفًا من النوع: :values.",
  "validation.mimetypes": ":attribute يجب أن يكون ملفًا من النوع: :values.",
  "validation.min.array": ":attribute يجب أن يحتوي على الأقل على :min عنصر.",
  "validation.min.file": "يجب أن يكون حجم :attribute على الأقل :min كيلوبايت.",
  "validation.min.numeric": "يجب أن يكون :attribute على الأقل :min.",
  "validation.min.string": "يجب أن يكون طول :attribute على الأقل :min حرفًا.",
  "validation.min_digits": ":attribute يجب أن يحتوي على الأقل :min أرقام.",
  "validation.missing": "يجب أن يفتقد حقل :attribute.",
  "validation.missing_if": "يجب أن يفتقد حقل :attribute عندما :other هو :value.",
  "validation.missing_unless": "يجب أن يفتقد حقل :attribute ما لم يكن :other هو :value.",
  "validation.missing_with": "يجب أن يفتقد حقل :attribute عندما تكون :values موجودة.",
  "validation.missing_with_all": "يجب أن يفتقد حقل :attribute عندما تكون :values موجودة.",
  "validation.multiple_of": ":attribute يجب أن يكون مضاعفًا لـ :value.",
  "validation.not_in": ":attribute المحدد غير صالح.",
  "validation.not_regex": "صيغة :attribute غير صالحة.",
  "validation.numeric": ":attribute يجب أن يكون رقمًا.",
  "validation.password.letters": "يجب أن يحتوي :attribute على حرف واحد على الأقل.",
  "validation.password.mixed": "يجب أن يحتوي :attribute على حرف كبير وحرف صغير على الأقل.",
  "validation.password.numbers": "يجب أن يحتوي :attribute على رقم واحد على الأقل.",
  "validation.password.symbols": "يجب أن يحتوي :attribute على رمز واحد على الأقل.",
  "validation.password.uncompromised": "تم ظهور :attribute المعطى في تسرب بيانات. يرجى اختيار :attribute مختلف.",
  "validation.present": "يجب أن يكون حقل :attribute حاضرًا.",
  "validation.prohibited": "الحقل :attribute محظور.",
  "validation.prohibited_if": "الحقل :attribute محظور عندما :other هو :value.",
  "validation.prohibited_unless": "الحقل :attribute محظور ما لم يكن :other في :values.",
  "validation.prohibits": "الحقل :attribute يمنع وجود :other.",
  "validation.regex": "صيغة :attribute غير صالحة.",
  "validation.required": "حقل :attribute مطلوب.",
  "validation.required_array_keys": "يجب أن يحتوي حقل :attribute على إدخالات لـ: :values.",
  "validation.required_if": "حقل :attribute مطلوب عندما :other هو :value.",
  "validation.required_if_accepted": "حقل :attribute مطلوب عندما يتم قبول :other.",
  "validation.required_unless": "حقل :attribute مطلوب ما لم يكن :other في :values.",
  "validation.required_with": "حقل :attribute مطلوب عندما تكون :values موجودة.",
  "validation.required_with_all": "حقل :attribute مطلوب عندما تكون :values موجودة.",
  "validation.required_without": "حقل :attribute مطلوب عندما لا يكون :values موجودًا.",
  "validation.required_without_all": "حقل :attribute مطلوب عندما لا يوجد أيًا من :values موجودًا.",
  "validation.same": ":attribute و :other يجب أن يتطابقا.",
  "validation.size.array": "يجب أن يحتوي :attribute على :size عنصرًا.",
  "validation.size.file": "يجب أن يكون حجم :attribute :size كيلوبايت.",
  "validation.size.numeric": "يجب أن يكون :attribute :size.",
  "validation.size.string": "يجب أن يكون طول :attribute :size حرفًا.",
  "validation.starts_with": ":attribute يجب أن يبدأ بأحد القيم التالية: :values.",
  "validation.string": ":attribute يجب أن يكون سلسلة نصية.",
  "validation.timezone": ":attribute يجب أن يكون منطقة زمنية صالحة.",
  "validation.unique": ":attribute تم استخدامه بالفعل.",
  "validation.uploaded": "فشل في تحميل :attribute.",
  "validation.uppercase": ":attribute يجب أن تكون كل أحرفها بالحروف الكبيرة.",
  "validation.url": ":attribute يجب أن يكون عنوان URL صالحًا.",
  "validation.ulid": ":attribute يجب أن يكون ULID صالحًا.",
  "validation.uuid": ":attribute يجب أن يكون UUID صالحًا.",
  "validation.custom.attribute-name.rule-name": "custom-message",
  "words.my_drive_school": "مدرسة القيادة الخاصة بي",
  "words.home": "الرئيسية",
  "words.welcome": "مرحبًا",
  "words.choose_locale": "اختر اللغة",
  "words.profile_photo": "صورة الملف الشخصي",
  "words.upload": "رفع",
  "words.uploaded": "تم الرفع",
  "words.activate_notifications": "تفعيل الإشعارات",
  "words.delete_account": "حذف الحساب",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_before_deleting_your_account_please_download_any_data_or_information_that_you_wish_to_retain": "بمجرد حذف حسابك، سيتم حذف جميع موارده وبياناته بشكل دائم. قبل حذف حسابك، يرجى تنزيل أي بيانات أو معلومات ترغب في الاحتفاظ بها",
  "words.are_you_sure_you_want_to_delete_your_account": "هل أنت متأكد أنك تريد حذف حسابك؟",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_please_enter_your_password_to_confirm_you_would_like_to_permanently_delete_your_account": "بمجرد حذف حسابك، سيتم حذف جميع موارده وبياناته بشكل دائم. يرجى إدخال كلمة المرور لتأكيد رغبتك في حذف حسابك بشكل دائم.",
  "words.save": "حفظ",
  "words.saved": "تم الحفظ",
  "words.cancel": "إلغاء",
  "words.firstname": "الاسم الأول",
  "words.lastname": "الاسم الأخير",
  "words.username": "اسم المستخدم",
  "words.gender": "الجنس",
  "words.male": "ذكر",
  "words.female": "أنثى",
  "words.email": "البريد الإلكتروني",
  "words.your_email_address_is_unverified": "عنوان البريد الإلكتروني غير متحقق.",
  "words.click_here_to_re_send_the_verification_email": "انقر هنا لإعادة إرسال رسالة التحقق.",
  "words.a_new_verification_link_has_been_sent_to_your_email_address": "تم إرسال رابط التحقق الجديد إلى عنوان البريد الإلكتروني الخاص بك.",
  "words.password": "كلمة المرور",
  "words.update_password": "تحديث كلمة المرور",
  "words.current_password": "كلمة المرور الحالية",
  "words.new_password": "كلمة المرور الجديدة",
  "words.confirm": "تأكيد",
  "words.confirm_password": "تأكيد كلمة المرور",
  "words.ensure_your_account_is_using_a_long_random_password_to_stay_secure": "تأكد من أن حسابك يستخدم كلمة مرور طويلة وعشوائية للبقاء آمنًا.",
  "words.profile_information": "معلومات الملف الشخصي",
  "words.update_your_account_profile_information_and_email_address": "قم بتحديث معلومات ملف حسابك وعنوان البريد الإلكتروني",
  "words.appointment_requests": "طلبات المواعيد",
  "words.requester": "المُطلب",
  "words.at": "في",
  "words.appointments": "المواعيد",
  "words.available_appointments": "المواعيد المتاحة",
  "words.admin_dashboard": "لوحة التحكم للمشرف",
  "words.settings": "الإعدادات",
  "words.this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing": "هذه منطقة آمنة في التطبيق. يرجى تأكيد كلمة المرور قبل المتابعة",
  "words.forgot_your_password_no_problem_just_let_us_know_your_email_address_and_we_will_email_you_a_password_reset_link_that_will_allow_you_to_choose_a_new_one": "هل نسيت كلمة المرور؟ لا مشكلة. فقط اعلمنا عنوان البريد الإلكتروني الخاص بك وسنرسل لك رابط إعادة تعيين كلمة المرور سيسمح لك باختيار كلمة مرور جديدة.",
  "words.email_username": "البريد الإلكتروني / اسم المستخدم",
  "words.email_password_reset_link": "إرسال رابط إعادة تعيين كلمة المرور عبر البريد الإلكتروني",
  "words.register": "التسجيل",
  "words.login": "تسجيل الدخول",
  "words.logout": "تسجيل الخروج",
  "words.remember_me": "تذكرني",
  "words.forgot_your_password": "نسيت كلمة المرور؟",
  "words.reset_password": "إعادة تعيين كلمة المرور",
  "words.thanks_for_signing_up_before_getting_started_could_you_verify_your_email_address_by_clicking_on_the_link_we_just_emailed_to_you_If_you_didnt_receive_the_email_we_will_gladly_send_you_another": "شكرًا للتسجيل! قبل البدء، هل يمكنك التحقق من عنوان البريد الإلكتروني الخاص بك بالنقر على الرابط الذي أرسلناه لك مؤخرًا عبر البريد الإلكتروني؟ إذا لم تستلم البريد الإلكتروني، سنكون سعداء بإرسال رسالة أخرى لك.",
  "words.a_new_verification_link_has_been_sent_to_the_email_address_you_provided_during_registration": "تم إرسال رابط التحقق الجديد إلى عنوان البريد الإلكتروني الذي قدمته أثناء التسجيل",
  "words.resend_verification_email": "إعادة إرسال رسالة التحقق",
  "words.business_hours": "ساعات العمل",
  "words.profile": "الملف الشخصي",
  "words.quiz": "اختبار",
  "words.my_data": "بياناتي",
  "words.my_appointments": "مواعيدي",
  "words.previous_appointments": "المواعيد السابقة",
  "words.upcoming_appointments": "المواعيد القادمة",
  "words.there_are_no_upcoming_appointments": "لا توجد مواعيد قادمة",
  "words.there_are_no_previous_appointments": "لا توجد مواعيد سابقة",
  "words.navigation": "التصفح",
  "words.pending": "قيد الانتظار",
  "words.approved": "تم الموافقة عليه",
  "words.cancelled": "تم الإلغاء",
  "words.declined": "تم الرفض",
  "words.address": "عنوان",
  "words.notes": "ملاحظات",
  "words.update_appointment": "تحديث الموعد",
  "words.cancel_appointment": "إلغاء الموعد",
  "words.approve_appointment": "الموافقة على الموعد",
  "words.decline_appointment": "رفض الموعد",
  "words.delete_appointment": "حذف الموعد",
  "words.appointment_confirmed": "تم تأكيد الموعد"
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_ar
}, Symbol.toStringTag, { value: "Module" }));
const php_de = {
  "auth.failed": "Diese Zugangsdaten wurden nicht gefunden.",
  "auth.password": "Das eingegebene Passwort ist falsch.",
  "auth.throttle": "Zu viele Login-Versuche. Bitte versuche es in :seconds Sekunden erneut.",
  "pagination.previous": "&laquo; Zurück",
  "pagination.next": "Weiter &raquo;",
  "passwords.reset": "Dein Passwort wurde zurückgesetzt!",
  "passwords.sent": "Wir haben dir den Link zum Zurücksetzen deines Passworts per E-Mail geschickt!",
  "passwords.throttled": "Bitte warte, bevor du es erneut versuchst.",
  "passwords.token": "Dieser Token zum Zurücksetzen des Passworts ist ungültig.",
  "passwords.user": "Wir konnten keinen Benutzer mit dieser E-Mail-Adresse finden.",
  "validation.accepted": "Das Feld :attribute muss akzeptiert werden.",
  "validation.accepted_if": "Das Feld :attribute muss akzeptiert werden, wenn :other gleich :value ist.",
  "validation.active_url": "Das Feld :attribute ist keine gültige URL.",
  "validation.after": "Das Feld :attribute muss ein Datum nach dem :date sein.",
  "validation.after_or_equal": "Das Feld :attribute muss ein Datum nach oder gleich dem :date sein.",
  "validation.alpha": "Das Feld :attribute darf nur Buchstaben enthalten.",
  "validation.alpha_dash": "Das Feld :attribute darf nur Buchstaben, Zahlen, Bindestriche und Unterstriche enthalten.",
  "validation.alpha_num": "Das Feld :attribute darf nur Buchstaben und Zahlen enthalten.",
  "validation.array": "Das Feld :attribute muss ein Array sein.",
  "validation.ascii": "Das Feld :attribute darf nur einfach-byte alphanumerische Zeichen und Symbole enthalten.",
  "validation.before": "Das Feld :attribute muss ein Datum vor dem :date sein.",
  "validation.before_or_equal": "Das Feld :attribute muss ein Datum vor oder gleich dem :date sein.",
  "validation.between.array": "Das Feld :attribute muss zwischen :min und :max Elemente enthalten.",
  "validation.between.file": "Das Feld :attribute muss zwischen :min und :max Kilobyte groß sein.",
  "validation.between.numeric": "Das Feld :attribute muss zwischen :min und :max liegen.",
  "validation.between.string": "Das Feld :attribute muss zwischen :min und :max Zeichen lang sein.",
  "validation.boolean": "Das Feld :attribute muss true oder false sein.",
  "validation.confirmed": "Die Bestätigung des Feldes :attribute stimmt nicht überein.",
  "validation.current_password": "Das Passwort ist falsch.",
  "validation.date": "Das Feld :attribute ist kein gültiges Datum.",
  "validation.date_equals": "Das Feld :attribute muss dem Datum :date entsprechen.",
  "validation.date_format": "Das Feld :attribute entspricht nicht dem Format :format.",
  "validation.decimal": "Das Feld :attribute muss :decimal Nachkommastellen haben.",
  "validation.declined": "Das Feld :attribute muss abgelehnt werden.",
  "validation.declined_if": "Das Feld :attribute muss abgelehnt werden, wenn :other gleich :value ist.",
  "validation.different": "Das Feld :attribute und :other müssen unterschiedlich sein.",
  "validation.digits": "Das Feld :attribute muss :digits Ziffern enthalten.",
  "validation.digits_between": "Das Feld :attribute muss zwischen :min und :max Ziffern enthalten.",
  "validation.dimensions": "Das Feld :attribute hat ungültige Bildabmessungen.",
  "validation.distinct": "Das Feld :attribute enthält einen doppelten Wert.",
  "validation.doesnt_end_with": "Das Feld :attribute darf nicht mit einer der folgenden Zeichenketten enden: :values.",
  "validation.doesnt_start_with": "Das Feld :attribute darf nicht mit einer der folgenden Zeichenketten beginnen: :values.",
  "validation.email": "Das Feld :attribute muss eine gültige E-Mail-Adresse enthalten.",
  "validation.ends_with": "Das Feld :attribute muss mit einer der folgenden Zeichenketten enden: :values.",
  "validation.enum": "Die ausgewählte Option für das Feld :attribute ist ungültig.",
  "validation.exists": "Die ausgewählte Option für das Feld :attribute ist ungültig.",
  "validation.file": "Das Feld :attribute muss eine Datei sein.",
  "validation.filled": "Das Feld :attribute muss einen Wert enthalten.",
  "validation.gt.array": "Das Feld :attribute muss mehr als :value Elemente enthalten.",
  "validation.gt.file": "Das Feld :attribute muss größer als :value Kilobyte sein.",
  "validation.gt.numeric": "Das Feld :attribute muss größer als :value sein.",
  "validation.gt.string": "Das Feld :attribute muss länger als :value Zeichen sein.",
  "validation.gte.array": "Das Feld :attribute muss :value Elemente oder mehr enthalten.",
  "validation.gte.file": "Das Feld :attribute muss größer als oder gleich :value Kilobyte sein.",
  "validation.gte.numeric": "Das Feld :attribute muss größer als oder gleich :value sein.",
  "validation.gte.string": "Das Feld :attribute muss länger als oder gleich :value Zeichen sein.",
  "validation.image": "Das Feld :attribute muss ein Bild sein.",
  "validation.in": "Die ausgewählte Option für das Feld :attribute ist ungültig.",
  "validation.in_array": "Das Feld :attribute existiert nicht in :other.",
  "validation.integer": "Das Feld :attribute muss eine ganze Zahl sein.",
  "validation.ip": "Das Feld :attribute muss eine gültige IP-Adresse enthalten.",
  "validation.ipv4": "Das Feld :attribute muss eine gültige IPv4-Adresse enthalten.",
  "validation.ipv6": "Das Feld :attribute muss eine gültige IPv6-Adresse enthalten.",
  "validation.json": "Das Feld :attribute muss eine gültige JSON-Zeichenkette enthalten.",
  "validation.lowercase": "Das Feld :attribute muss in Kleinbuchstaben sein.",
  "validation.lt.array": "Das Feld :attribute muss weniger als :value Elemente enthalten.",
  "validation.lt.file": "Das Feld :attribute muss kleiner als :value Kilobyte sein.",
  "validation.lt.numeric": "Das Feld :attribute muss kleiner als :value sein.",
  "validation.lt.string": "Das Feld :attribute muss kürzer als :value Zeichen sein.",
  "validation.lte.array": "Das Feld :attribute darf nicht mehr als :value Elemente enthalten.",
  "validation.lte.file": "Das Feld :attribute muss kleiner als oder gleich :value Kilobyte sein.",
  "validation.lte.numeric": "Das Feld :attribute muss kleiner als oder gleich :value sein.",
  "validation.lte.string": "Das Feld :attribute muss kürzer als oder gleich :value Zeichen sein.",
  "validation.mac_address": "Das Feld :attribute muss eine gültige MAC-Adresse enthalten.",
  "validation.max.array": "Das Feld :attribute darf nicht mehr als :max Elemente enthalten.",
  "validation.max.file": "Das Feld :attribute darf nicht größer als :max Kilobyte sein.",
  "validation.max.numeric": "Das Feld :attribute darf nicht größer als :max sein.",
  "validation.max.string": "Das Feld :attribute darf nicht länger als :max Zeichen sein.",
  "validation.max_digits": "Das Feld :attribute darf nicht mehr als :max Ziffern enthalten.",
  "validation.mimes": "Das Feld :attribute muss eine Datei des Typs :values sein.",
  "validation.mimetypes": "Das Feld :attribute muss eine Datei des Typs :values sein.",
  "validation.min.array": "Das Feld :attribute muss mindestens :min Elemente enthalten.",
  "validation.min.file": "Das Feld :attribute muss mindestens :min Kilobyte groß sein.",
  "validation.min.numeric": "Das Feld :attribute muss mindestens :min sein.",
  "validation.min.string": "Das Feld :attribute muss mindestens :min Zeichen lang sein.",
  "validation.min_digits": "Das Feld :attribute muss mindestens :min Ziffern enthalten.",
  "validation.missing": "Das Feld :attribute darf nicht vorhanden sein.",
  "validation.missing_if": "Das Feld :attribute darf nicht vorhanden sein, wenn :other gleich :value ist.",
  "validation.missing_unless": "Das Feld :attribute darf nicht vorhanden sein, es sei denn, :other ist gleich :value.",
  "validation.missing_with": "Das Feld :attribute darf nicht vorhanden sein, wenn :values vorhanden ist.",
  "validation.missing_with_all": "Das Feld :attribute darf nicht vorhanden sein, wenn :values vorhanden sind.",
  "validation.multiple_of": "Das Feld :attribute muss ein Vielfaches von :value sein.",
  "validation.not_in": "Die ausgewählte Option für das Feld :attribute ist ungültig.",
  "validation.not_regex": "Das Format des Feldes :attribute ist ungültig.",
  "validation.numeric": "Das Feld :attribute muss eine Zahl sein.",
  "validation.password.letters": "Das Feld :attribute muss mindestens einen Buchstaben enthalten.",
  "validation.password.mixed": "Das Feld :attribute muss mindestens einen Großbuchstaben und einen Kleinbuchstaben enthalten.",
  "validation.password.numbers": "Das Feld :attribute muss mindestens eine Zahl enthalten.",
  "validation.password.symbols": "Das Feld :attribute muss mindestens ein Symbol enthalten.",
  "validation.password.uncompromised": "Das angegebene Feld :attribute ist in einem Datenleck aufgetaucht. Bitte wählen Sie ein anderes :attribute.",
  "validation.present": "Das Feld :attribute muss vorhanden sein.",
  "validation.prohibited": "Das Feld :attribute ist nicht erlaubt.",
  "validation.prohibited_if": "Das Feld :attribute ist nicht erlaubt, wenn :other gleich :value ist.",
  "validation.prohibited_unless": "Das Feld :attribute ist nicht erlaubt, es sei denn, :other ist in :values enthalten.",
  "validation.prohibits": "Das Feld :attribute verbietet, dass :other vorhanden ist.",
  "validation.regex": "Das Format des Feldes :attribute ist ungültig.",
  "validation.required": "Das Feld :attribute ist erforderlich.",
  "validation.required_array_keys": "Das Feld :attribute muss Einträge für die folgenden Schlüssel enthalten: :values.",
  "validation.required_if": "Das Feld :attribute ist erforderlich, wenn :other gleich :value ist.",
  "validation.required_if_accepted": "Das Feld :attribute ist erforderlich, wenn :other akzeptiert wird.",
  "validation.required_unless": "Das Feld :attribute ist erforderlich, es sei denn, :other ist in :values enthalten.",
  "validation.required_with": "Das Feld :attribute ist erforderlich, wenn :values vorhanden ist.",
  "validation.required_with_all": "Das Feld :attribute ist erforderlich, wenn alle :values vorhanden sind.",
  "validation.required_without": "Das Feld :attribute ist erforderlich, wenn :values nicht vorhanden ist.",
  "validation.required_without_all": "Das Feld :attribute ist erforderlich, wenn keines der :values vorhanden ist.",
  "validation.same": "Das Feld :attribute und :other müssen übereinstimmen.",
  "validation.size.array": "Das Feld :attribute muss :size Elemente enthalten.",
  "validation.size.file": "Das Feld :attribute muss :size Kilobyte groß sein.",
  "validation.size.numeric": "Das Feld :attribute muss :size sein.",
  "validation.size.string": "Das Feld :attribute muss :size Zeichen lang sein.",
  "validation.starts_with": "Das Feld :attribute muss mit einem der folgenden Werte beginnen: :values.",
  "validation.string": "Das Feld :attribute muss eine Zeichenkette sein.",
  "validation.timezone": "Das Feld :attribute muss eine gültige Zeitzone enthalten.",
  "validation.unique": "Das Feld :attribute wurde bereits verwendet.",
  "validation.uploaded": "Das Hochladen des Feldes :attribute ist fehlgeschlagen.",
  "validation.uppercase": "Das Feld :attribute muss in Großbuchstaben sein.",
  "validation.url": "Das Feld :attribute muss eine gültige URL enthalten.",
  "validation.ulid": "Das Feld :attribute muss einen gültigen ULID enthalten.",
  "validation.uuid": "Das Feld :attribute muss eine gültige UUID enthalten.",
  "validation.custom.attribute-name.rule-name": "custom-message",
  "words.my_drive_school": "Meine Fahrschule",
  "words.home": "Startseite",
  "words.welcome": "Willkommen",
  "words.choose_locale": "Sprache auswählen",
  "words.profile_photo": "Profilbild",
  "words.upload": "Hochladen",
  "words.uploaded": "Hochgeladen",
  "words.activate_notifications": "Benachrichtigungen aktivieren",
  "words.delete_account": "Konto löschen",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_before_deleting_your_account_please_download_any_data_or_information_that_you_wish_to_retain": "Sobald Ihr Konto gelöscht ist, werden alle Ressourcen und Daten dauerhaft gelöscht. Bitte laden Sie vor dem Löschen Ihres Kontos alle Daten oder Informationen herunter, die Sie behalten möchten.",
  "words.are_you_sure_you_want_to_delete_your_account": "Sind Sie sicher, dass Sie Ihr Konto löschen möchten?",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_please_enter_your_password_to_confirm_you_would_like_to_permanently_delete_your_account": "Sobald Ihr Konto gelöscht ist, werden alle Ressourcen und Daten dauerhaft gelöscht. Bitte geben Sie Ihr Passwort ein, um zu bestätigen, dass Sie Ihr Konto dauerhaft löschen möchten.",
  "words.save": "Speichern",
  "words.saved": "Gespeichert",
  "words.cancel": "Abbrechen",
  "words.firstname": "Vorname",
  "words.lastname": "Nachname",
  "words.username": "Benutzername",
  "words.gender": "Geschlecht",
  "words.male": "Männlich",
  "words.female": "Weiblich",
  "words.email": "E-Mail",
  "words.your_email_address_is_unverified": "Ihre E-Mail-Adresse ist nicht verifiziert.",
  "words.click_here_to_re_send_the_verification_email": "Klicken Sie hier, um die Verifizierungs-E-Mail erneut zu senden.",
  "words.a_new_verification_link_has_been_sent_to_your_email_address": "Ein neuer Verifizierungslink wurde an Ihre E-Mail-Adresse gesendet.",
  "words.password": "Passwort",
  "words.update_password": "Passwort aktualisieren",
  "words.current_password": "Aktuelles Passwort",
  "words.new_password": "Neues Passwort",
  "words.confirm": "Bestätigen",
  "words.confirm_password": "Passwort bestätigen",
  "words.ensure_your_account_is_using_a_long_random_password_to_stay_secure": "Stellen Sie sicher, dass Ihr Konto ein langes, zufälliges Passwort verwendet, um sicher zu bleiben.",
  "words.profile_information": "Profilinformationen",
  "words.update_your_account_profile_information_and_email_address": "Aktualisieren Sie die Profilinformationen und die E-Mail-Adresse Ihres Kontos",
  "words.appointment_requests": "Terminanfragen",
  "words.requester": "Anforderer",
  "words.at": "um",
  "words.appointments": "Termine",
  "words.available_appointments": "Verfügbare Termine",
  "words.admin_dashboard": "Admin-Dashboard",
  "words.settings": "Einstellungen",
  "words.this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing": "Dies ist ein sicherer Bereich der Anwendung. Bitte bestätigen Sie Ihr Passwort, bevor Sie fortfahren.",
  "words.forgot_your_password_no_problem_just_let_us_know_your_email_address_and_we_will_email_you_a_password_reset_link_that_will_allow_you_to_choose_a_new_one": "Passwort vergessen? Kein Problem. Teilen Sie uns einfach Ihre E-Mail-Adresse mit, und wir senden Ihnen einen Link zum Zurücksetzen des Passworts per E-Mail, mit dem Sie ein neues auswählen können.",
  "words.email_username": "E-Mail / Benutzername",
  "words.email_password_reset_link": "E-Mail-Passwort-Reset-Link",
  "words.register": "Registrieren",
  "words.login": "Anmelden",
  "words.logout": "Abmelden",
  "words.remember_me": "Erinnere dich an mich",
  "words.forgot_your_password": "Passwort vergessen?",
  "words.reset_password": "Passwort zurücksetzen",
  "words.thanks_for_signing_up_before_getting_started_could_you_verify_your_email_address_by_clicking_on_the_link_we_just_emailed_to_you_If_you_didnt_receive_the_email_we_will_gladly_send_you_another": "Vielen Dank für die Anmeldung! Bevor Sie beginnen, können Sie Ihre E-Mail-Adresse verifizieren, indem Sie auf den Link klicken, den wir Ihnen gerade per E-Mail gesendet haben. Wenn Sie die E-Mail nicht erhalten haben, senden wir Ihnen gerne eine weitere.",
  "words.a_new_verification_link_has_been_sent_to_the_email_address_you_provided_during_registration": "Ein neuer Verifizierungslink wurde an die von Ihnen während der Registrierung angegebene E-Mail-Adresse gesendet",
  "words.resend_verification_email": "Verifizierungs-E-Mail erneut senden",
  "words.business_hours": "Geschäftszeiten",
  "words.profile": "Profil",
  "words.quiz": "Quiz",
  "words.my_data": "Meine Daten",
  "words.my_appointments": "Meine Termine",
  "words.previous_appointments": "Vorherige Termine",
  "words.upcoming_appointments": "Kommende Termine",
  "words.there_are_no_upcoming_appointments": "Es gibt keine kommenden Termine",
  "words.there_are_no_previous_appointments": "Es gibt keine vorherigen Termine",
  "words.navigation": "Navigation",
  "words.pending": "Ausstehend",
  "words.approved": "Genehmigt",
  "words.cancelled": "Abgesagt",
  "words.declined": "Abgelehnt",
  "words.address": "Adresse",
  "words.notes": "Notizen",
  "words.update_appointment": "Termin aktualisieren",
  "words.cancel_appointment": "Termin abbrechen",
  "words.approve_appointment": "Termin genehmigen",
  "words.decline_appointment": "Termin ablehnen",
  "words.delete_appointment": "Termin löschen",
  "words.appointment_confirmed": "Termin bestätigt",
  "words.loading": "Wird geladen"
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_de
}, Symbol.toStringTag, { value: "Module" }));
const php_en = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset!",
  "passwords.sent": "We have emailed your password reset link!",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute must be accepted.",
  "validation.accepted_if": "The :attribute must be accepted when :other is :value.",
  "validation.active_url": "The :attribute is not a valid URL.",
  "validation.after": "The :attribute must be a date after :date.",
  "validation.after_or_equal": "The :attribute must be a date after or equal to :date.",
  "validation.alpha": "The :attribute must only contain letters.",
  "validation.alpha_dash": "The :attribute must only contain letters, numbers, dashes and underscores.",
  "validation.alpha_num": "The :attribute must only contain letters and numbers.",
  "validation.array": "The :attribute must be an array.",
  "validation.ascii": "The :attribute must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute must be a date before :date.",
  "validation.before_or_equal": "The :attribute must be a date before or equal to :date.",
  "validation.between.array": "The :attribute must have between :min and :max items.",
  "validation.between.file": "The :attribute must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute must be between :min and :max.",
  "validation.between.string": "The :attribute must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.confirmed": "The :attribute confirmation does not match.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute is not a valid date.",
  "validation.date_equals": "The :attribute must be a date equal to :date.",
  "validation.date_format": "The :attribute does not match the format :format.",
  "validation.decimal": "The :attribute must have :decimal decimal places.",
  "validation.declined": "The :attribute must be declined.",
  "validation.declined_if": "The :attribute must be declined when :other is :value.",
  "validation.different": "The :attribute and :other must be different.",
  "validation.digits": "The :attribute must be :digits digits.",
  "validation.digits_between": "The :attribute must be between :min and :max digits.",
  "validation.dimensions": "The :attribute has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute may not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute may not start with one of the following: :values.",
  "validation.email": "The :attribute must be a valid email address.",
  "validation.ends_with": "The :attribute must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.file": "The :attribute must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute must have more than :value items.",
  "validation.gt.file": "The :attribute must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute must be greater than :value.",
  "validation.gt.string": "The :attribute must be greater than :value characters.",
  "validation.gte.array": "The :attribute must have :value items or more.",
  "validation.gte.file": "The :attribute must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute must be greater than or equal to :value characters.",
  "validation.image": "The :attribute must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field does not exist in :other.",
  "validation.integer": "The :attribute must be an integer.",
  "validation.ip": "The :attribute must be a valid IP address.",
  "validation.ipv4": "The :attribute must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute must be a valid IPv6 address.",
  "validation.json": "The :attribute must be a valid JSON string.",
  "validation.lowercase": "The :attribute must be lowercase.",
  "validation.lt.array": "The :attribute must have less than :value items.",
  "validation.lt.file": "The :attribute must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute must be less than :value.",
  "validation.lt.string": "The :attribute must be less than :value characters.",
  "validation.lte.array": "The :attribute must not have more than :value items.",
  "validation.lte.file": "The :attribute must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute must be less than or equal to :value.",
  "validation.lte.string": "The :attribute must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute must be a valid MAC address.",
  "validation.max.array": "The :attribute must not have more than :max items.",
  "validation.max.file": "The :attribute must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute must not be greater than :max.",
  "validation.max.string": "The :attribute must not be greater than :max characters.",
  "validation.max_digits": "The :attribute must not have more than :max digits.",
  "validation.mimes": "The :attribute must be a file of type: :values.",
  "validation.mimetypes": "The :attribute must be a file of type: :values.",
  "validation.min.array": "The :attribute must have at least :min items.",
  "validation.min.file": "The :attribute must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute must be at least :min.",
  "validation.min.string": "The :attribute must be at least :min characters.",
  "validation.min_digits": "The :attribute must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute format is invalid.",
  "validation.numeric": "The :attribute must be a number.",
  "validation.password.letters": "The :attribute must contain at least one letter.",
  "validation.password.mixed": "The :attribute must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute must contain at least one number.",
  "validation.password.symbols": "The :attribute must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute and :other must match.",
  "validation.size.array": "The :attribute must contain :size items.",
  "validation.size.file": "The :attribute must be :size kilobytes.",
  "validation.size.numeric": "The :attribute must be :size.",
  "validation.size.string": "The :attribute must be :size characters.",
  "validation.starts_with": "The :attribute must start with one of the following: :values.",
  "validation.string": "The :attribute must be a string.",
  "validation.timezone": "The :attribute must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute must be uppercase.",
  "validation.url": "The :attribute must be a valid URL.",
  "validation.ulid": "The :attribute must be a valid ULID.",
  "validation.uuid": "The :attribute must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message",
  "words.my_drive_school": "My Drive School",
  "words.home": "Home",
  "words.welcome": "Welcome",
  "words.choose_locale": "Choose Locale",
  "words.profile_photo": "Profile Photo",
  "words.upload": "Upload",
  "words.uploaded": "Uploaded",
  "words.activate_notifications": "Activate Notifications",
  "words.delete_account": "Delete Account",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_before_deleting_your_account_please_download_any_data_or_information_that_you_wish_to_retain": "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain",
  "words.are_you_sure_you_want_to_delete_your_account": "Are you sure you want to delete your account?",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_please_enter_your_password_to_confirm_you_would_like_to_permanently_delete_your_account": "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.",
  "words.save": "Save",
  "words.saved": "Saved",
  "words.cancel": "Cancel",
  "words.firstname": "First Name",
  "words.lastname": "Last Name",
  "words.username": "User Name",
  "words.gender": "Gender",
  "words.male": "Male",
  "words.female": "Female",
  "words.email": "Email",
  "words.your_email_address_is_unverified": "Your email address is unverified.",
  "words.click_here_to_re_send_the_verification_email": "Click here to re-send the verification email.",
  "words.a_new_verification_link_has_been_sent_to_your_email_address": "A new verification link has been sent to your email address.",
  "words.password": "Password",
  "words.update_password": "Update Password",
  "words.current_password": "Current Password",
  "words.new_password": "New Password",
  "words.confirm": "Confirm",
  "words.confirm_password": "Confirm Password",
  "words.ensure_your_account_is_using_a_long_random_password_to_stay_secure": "Ensure your account is using a long, random password to stay secure.",
  "words.profile_information": "Profile Information",
  "words.update_your_account_profile_information_and_email_address": "Update your account's profile information and email address",
  "words.appointment_requests": "Appointment Requests",
  "words.requester": "Requester",
  "words.at": "at",
  "words.appointments": "Appointments",
  "words.available_appointments": "Available Appointments",
  "words.admin_dashboard": "Admin Dashboard",
  "words.settings": "Settings",
  "words.this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing": "This is a secure area of the application. Please confirm your password\n  before continuing",
  "words.forgot_your_password_no_problem_just_let_us_know_your_email_address_and_we_will_email_you_a_password_reset_link_that_will_allow_you_to_choose_a_new_one": "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.",
  "words.email_username": "Email / Username",
  "words.email_password_reset_link": "Email Password Reset Link",
  "words.register": "Register",
  "words.login": "Login",
  "words.logout": "Logout",
  "words.remember_me": "Remember me",
  "words.forgot_your_password": "Forgot your password?",
  "words.reset_password": "Reset Password",
  "words.thanks_for_signing_up_before_getting_started_could_you_verify_your_email_address_by_clicking_on_the_link_we_just_emailed_to_you_If_you_didnt_receive_the_email_we_will_gladly_send_you_another": "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.",
  "words.a_new_verification_link_has_been_sent_to_the_email_address_you_provided_during_registration": "A new verification link has been sent to the email address you provided during registration",
  "words.resend_verification_email": "Resend Verification Email",
  "words.business_hours": "Business Hours",
  "words.profile": "Profile",
  "words.quiz": "Quiz",
  "words.my_data": "My Data",
  "words.my_appointments": "My Appointments",
  "words.previous_appointments": "Previous Appointments",
  "words.upcoming_appointments": "Upcoming Appointments",
  "words.there_are_no_upcoming_appointments": "There are no upcoming appointments",
  "words.there_are_no_previous_appointments": "There are no previous appointments",
  "words.navigation": "Navigation",
  "words.pending": "Pending",
  "words.approved": "Approved",
  "words.cancelled": "Cancelled",
  "words.declined": "Declined",
  "words.address": "Address",
  "words.notes": "Notes",
  "words.update_appointment": "Update Appointment",
  "words.cancel_appointment": "Cancel Appointment",
  "words.approve_appointment": "Approve Appointment",
  "words.decline_appointment": "Decline Appointment",
  "words.delete_appointment": "Delete Appointment",
  "words.appointment_confirmed": "Appointment Confirmed",
  "words.text_questions": "Text Questions",
  "words.math_questions": "Math Questions",
  "words.photo_questions": "Photo Questions",
  "words.video_questions": "Video Questions",
  "words.add_question": "Add Question",
  "words.question": "Question",
  "words.question_added": "Question Added",
  "words.questions": "Questions",
  "words.answers": "Answers",
  "words.show_questions": "Show Questions",
  "words.delete": "Delete",
  "words.edit": "Edit",
  "words.update_question": "Update Question",
  "words.question_updated": "Question Updated",
  "words.photo": "Photo",
  "words.are_you_sure": "Are you sure?",
  "words.question_is_safe": "Question is safe!",
  "words.oops_Something_went_wrong": "Oops! Something went wrong.",
  "words.question_has_been_deleted": "Question has been deleted!",
  "words.once_deleted_you_will_not_be_able_to_recover_this_Question": "Once deleted, you will not be able to recover this Question!",
  "words.please_select_the_correct_answer": "Please select the correct answer",
  "words.start_quiz": "Start Quiz",
  "words.close": "Close"
};
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_en
}, Symbol.toStringTag, { value: "Module" }));
const php_es = {
  "auth.failed": "Estas credenciales no coinciden con nuestros registros.",
  "auth.password": "La contraseña proporcionada es incorrecta.",
  "auth.throttle": "Demasiados intentos de inicio de sesión. Por favor, inténtalo de nuevo en :segundos segundos.",
  "pagination.previous": "&laquo; Anterior",
  "pagination.next": "Siguiente &raquo;",
  "passwords.reset": "Your password has been reset!",
  "passwords.sent": "We have emailed your password reset link!",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "El campo :attribute debe ser aceptado.",
  "validation.accepted_if": "El campo :attribute debe ser aceptado cuando :other es :value.",
  "validation.active_url": "El campo :attribute no es una URL válida.",
  "validation.after": "El campo :attribute debe ser una fecha posterior a :date.",
  "validation.after_or_equal": "El campo :attribute debe ser una fecha posterior o igual a :date.",
  "validation.alpha": "El campo :attribute sólo puede contener letras.",
  "validation.alpha_dash": "El campo :attribute sólo puede contener letras, números, guiones y guiones bajos.",
  "validation.alpha_num": "El campo :attribute sólo puede contener letras y números.",
  "validation.array": "El campo :attribute debe ser un array.",
  "validation.ascii": "El campo :attribute sólo puede contener caracteres alfanuméricos de un solo byte y símbolos.",
  "validation.before": "El campo :attribute debe ser una fecha anterior a :date.",
  "validation.before_or_equal": "El campo :attribute debe ser una fecha anterior o igual a :date.",
  "validation.between.array": "El campo :attribute debe tener entre :min y :max elementos.",
  "validation.between.file": "El archivo :attribute debe pesar entre :min y :max kilobytes.",
  "validation.between.numeric": "El campo :attribute debe estar entre :min y :max.",
  "validation.between.string": "El campo :attribute debe tener entre :min y :max caracteres.",
  "validation.boolean": "El campo :attribute debe ser verdadero o falso.",
  "validation.confirmed": "La confirmación del campo :attribute no coincide.",
  "validation.current_password": "La contraseña es incorrecta.",
  "validation.date": "El campo :attribute no es una fecha válida.",
  "validation.date_equals": "El campo :attribute debe ser una fecha igual a :date.",
  "validation.date_format": "El campo :attribute no coincide con el formato :format.",
  "validation.decimal": "El campo :attribute debe tener :decimal lugares decimales.",
  "validation.declined": "El campo :attribute debe ser declinado.",
  "validation.declined_if": "El campo :attribute debe ser declinado cuando :other es :value.",
  "validation.different": "Los campos :attribute y :other deben ser diferentes.",
  "validation.digits": "El campo :attribute debe tener :digits dígitos.",
  "validation.digits_between": "El campo :attribute debe tener entre :min y :max dígitos.",
  "validation.dimensions": "El campo :attribute tiene dimensiones de imagen inválidas.",
  "validation.distinct": "El campo :attribute tiene un valor duplicado.",
  "validation.doesnt_end_with": "El campo :attribute no debe terminar con ninguno de los siguientes valores: :values.",
  "validation.doesnt_start_with": "El campo :attribute no debe comenzar con ninguno de los siguientes valores: :values.",
  "validation.email": "El campo :attribute debe ser una dirección de correo electrónico válida.",
  "validation.ends_with": "El campo :attribute debe terminar con uno de los siguientes valores: :values.",
  "validation.enum": "La opción seleccionada del campo :attribute es inválida.",
  "validation.exists": "La opción seleccionada del campo :attribute es inválida.",
  "validation.file": "El campo :attribute debe ser un archivo.",
  "validation.filled": "El campo :attribute es obligatorio.",
  "validation.gt.array": "El campo :attribute debe tener más de :value elementos.",
  "validation.gt.file": "El archivo :attribute debe pesar más de :value kilobytes.",
  "validation.gt.numeric": "El campo :attribute debe ser mayor que :value.",
  "validation.gt.string": "El campo :attribute debe tener más de :value caracteres.",
  "validation.gte.array": "El campo :attribute debe tener :value elementos o más.",
  "validation.gte.file": "El archivo :attribute debe pesar :value kilobytes o más.",
  "validation.gte.numeric": "El campo :attribute debe ser mayor o igual que :value.",
  "validation.gte.string": "El campo :attribute debe tener :value caracteres o más.",
  "validation.image": "El campo :attribute debe ser una imagen.",
  "validation.in": "La opción seleccionada del campo :attribute es inválida.",
  "validation.in_array": "El campo :attribute no existe en :other.",
  "validation.integer": "El campo :attribute debe ser un número entero.",
  "validation.ip": "El campo :attribute debe ser una dirección IP válida.",
  "validation.ipv4": "El campo :attribute debe ser una dirección IPv4 válida.",
  "validation.ipv6": "El campo :attribute debe ser una dirección IPv6 válida.",
  "validation.json": "El campo :attribute debe ser una cadena JSON válida.",
  "validation.lowercase": "El campo :attribute debe estar en minúsculas.",
  "validation.lt.array": "El campo :attribute debe tener menos de :value elementos.",
  "validation.lt.file": "El archivo :attribute debe pesar menos de :value kilobytes.",
  "validation.lt.numeric": "El campo :attribute debe ser menor que :value.",
  "validation.lt.string": "El campo :attribute debe tener menos de :value caracteres.",
  "validation.lte.array": "El campo :attribute no debe tener más de :value elementos.",
  "validation.lte.file": "El archivo :attribute debe pesar :value kilobytes o menos.",
  "validation.lte.numeric": "El campo :attribute debe ser menor o igual que :value.",
  "validation.lte.string": "El campo :attribute debe tener :value caracteres o menos.",
  "validation.mac_address": "El campo :attribute debe ser una dirección MAC válida.",
  "validation.max.array": "El campo :attribute no debe tener más de :max elementos.",
  "validation.max.file": "El archivo :attribute no debe pesar más de :max kilobytes.",
  "validation.max.numeric": "El campo :attribute no debe ser mayor que :max.",
  "validation.max.string": "El campo :attribute no debe tener más de :max caracteres.",
  "validation.max_digits": "El campo :attribute no debe tener más de :max dígitos.",
  "validation.mimes": "El campo :attribute debe ser un archivo del tipo: :values.",
  "validation.mimetypes": "El campo :attribute debe ser un archivo del tipo: :values.",
  "validation.min.array": "El campo :attribute debe tener al menos :min elementos.",
  "validation.min.file": "El archivo :attribute debe pesar al menos :min kilobytes.",
  "validation.min.numeric": "El campo :attribute debe ser al menos :min.",
  "validation.min.string": "El campo :attribute debe tener al menos :min caracteres.",
  "validation.min_digits": "El campo :attribute debe tener al menos :min dígitos.",
  "validation.missing": "El campo :attribute debe estar ausente.",
  "validation.missing_if": "El campo :attribute debe estar ausente cuando :other es :value.",
  "validation.missing_unless": "El campo :attribute debe estar ausente a menos que :other sea :value.",
  "validation.missing_with": "El campo :attribute debe estar ausente cuando :values está presente.",
  "validation.missing_with_all": "El campo :attribute debe estar ausente cuando :values están presentes.",
  "validation.multiple_of": "El campo :attribute debe ser un múltiplo de :value.",
  "validation.not_in": "La opción seleccionada del campo :attribute es inválida.",
  "validation.not_regex": "El formato del campo :attribute es inválido.",
  "validation.numeric": "El campo :attribute debe ser un número.",
  "validation.password.letters": "El campo :attribute debe contener al menos una letra.",
  "validation.password.mixed": "El campo :attribute debe contener al menos una letra mayúscula y una minúscula.",
  "validation.password.numbers": "El campo :attribute debe contener al menos un número.",
  "validation.password.symbols": "El campo :attribute debe contener al menos un símbolo.",
  "validation.password.uncompromised": "El campo :attribute proporcionado ha aparecido en una fuga de datos. Por favor, elige otro :attribute.",
  "validation.present": "El campo :attribute debe estar presente.",
  "validation.prohibited": "El campo :attribute está prohibido.",
  "validation.prohibited_if": "El campo :attribute está prohibido cuando :other es :value.",
  "validation.prohibited_unless": "El campo :attribute está prohibido a menos que :other esté en :values.",
  "validation.prohibits": "El campo :attribute prohíbe que :other esté presente.",
  "validation.regex": "El formato del campo :attribute es inválido.",
  "validation.required": "El campo :attribute es obligatorio.",
  "validation.required_array_keys": "El campo :attribute debe contener entradas para: :values.",
  "validation.required_if": "El campo :attribute es obligatorio cuando :other es :value.",
  "validation.required_if_accepted": "El campo :attribute es obligatorio cuando :other es aceptado.",
  "validation.required_unless": "El campo :attribute es obligatorio a menos que :other esté en :values.",
  "validation.required_with": "El campo :attribute es obligatorio cuando :values está presente.",
  "validation.required_with_all": "El campo :attribute es obligatorio cuando :values están presentes.",
  "validation.required_without": "El campo :attribute es obligatorio cuando :values no está presente.",
  "validation.required_without_all": "El campo :attribute es obligatorio cuando ninguno de los :values está presente.",
  "validation.same": "El campo :attribute y :other deben coincidir.",
  "validation.size.array": "El campo :attribute debe contener :size elementos.",
  "validation.size.file": "El archivo :attribute debe pesar :size kilobytes.",
  "validation.size.numeric": "El campo :attribute debe ser :size.",
  "validation.size.string": "El campo :attribute debe tener :size caracteres.",
  "validation.starts_with": "El campo :attribute debe empezar con uno de los siguientes valores: :values.",
  "validation.string": "El campo :attribute debe ser una cadena de texto.",
  "validation.timezone": "El campo :attribute debe ser una zona horaria válida.",
  "validation.unique": "El campo :attribute ya ha sido tomado.",
  "validation.uploaded": "El archivo :attribute no se pudo cargar.",
  "validation.uppercase": "El campo :attribute debe estar en mayúsculas.",
  "validation.url": "El campo :attribute debe ser una URL válida.",
  "validation.ulid": "El campo :attribute debe ser un ULID válido.",
  "validation.uuid": "El campo :attribute debe ser un UUID válido.",
  "validation.custom.attribute-name.rule-name": "custom-message",
  "words.my_drive_school": "Mi Autoescuela",
  "words.home": "Inicio",
  "words.welcome": "Bienvenido",
  "words.choose_locale": "Elegir Idioma",
  "words.profile_photo": "Foto de Perfil",
  "words.upload": "Subir",
  "words.uploaded": "Subido",
  "words.activate_notifications": "Activar Notificaciones",
  "words.delete_account": "Eliminar Cuenta",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_before_deleting_your_account_please_download_any_data_or_information_that_you_wish_to_retain": "Una vez que su cuenta se elimine, todos sus recursos y datos se eliminarán permanentemente. Antes de eliminar su cuenta, descargue los datos o información que desee conservar.",
  "words.are_you_sure_you_want_to_delete_your_account": "¿Estás seguro de que quieres eliminar tu cuenta?",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_please_enter_your_password_to_confirm_you_would_like_to_permanently_delete_your_account": "Una vez que su cuenta se elimine, todos sus recursos y datos se eliminarán permanentemente. Por favor, ingrese su contraseña para confirmar que desea eliminar su cuenta permanentemente.",
  "words.save": "Guardar",
  "words.saved": "Guardado",
  "words.cancel": "Cancelar",
  "words.firstname": "Nombre",
  "words.lastname": "Apellido",
  "words.username": "Nombre de Usuario",
  "words.gender": "Género",
  "words.male": "Masculino",
  "words.female": "Femenino",
  "words.email": "Correo Electrónico",
  "words.your_email_address_is_unverified": "Su dirección de correo electrónico no está verificada.",
  "words.click_here_to_re_send_the_verification_email": "Haga clic aquí para reenviar el correo de verificación.",
  "words.a_new_verification_link_has_been_sent_to_your_email_address": "Se ha enviado un nuevo enlace de verificación a su dirección de correo electrónico.",
  "words.password": "Contraseña",
  "words.update_password": "Actualizar Contraseña",
  "words.current_password": "Contraseña Actual",
  "words.new_password": "Nueva Contraseña",
  "words.confirm": "Confirmar",
  "words.confirm_password": "Confirmar Contraseña",
  "words.ensure_your_account_is_using_a_long_random_password_to_stay_secure": "Asegúrese de que su cuenta esté utilizando una contraseña larga y aleatoria para mantenerla segura.",
  "words.profile_information": "Información del Perfil",
  "words.update_your_account_profile_information_and_email_address": "Actualice la información de perfil y la dirección de correo electrónico de su cuenta",
  "words.appointment_requests": "Solicitudes de Citas",
  "words.requester": "Solicitante",
  "words.at": "a las",
  "words.appointments": "Citas",
  "words.available_appointments": "Citas Disponibles",
  "words.admin_dashboard": "Panel de Administrador",
  "words.settings": "Ajustes",
  "words.this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing": "Esta es un área segura de la aplicación. Por favor, confirme su contraseña antes de continuar",
  "words.forgot_your_password_no_problem_just_let_us_know_your_email_address_and_we_will_email_you_a_password_reset_link_that_will_allow_you_to_choose_a_new_one": "¿Olvidó su contraseña? No hay problema. Simplemente proporcione su dirección de correo electrónico y le enviaremos un enlace para restablecer su contraseña que le permitirá elegir una nueva.",
  "words.email_username": "Correo Electrónico / Nombre de Usuario",
  "words.email_password_reset_link": "Enviar Enlace de Restablecimiento de Contraseña por Correo Electrónico",
  "words.register": "Registrarse",
  "words.login": "Iniciar Sesión",
  "words.logout": "Cerrar Sesión",
  "words.remember_me": "Recordarme",
  "words.forgot_your_password": "¿Olvidaste tu contraseña?",
  "words.reset_password": "Restablecer Contraseña",
  "words.thanks_for_signing_up_before_getting_started_could_you_verify_your_email_address_by_clicking_on_the_link_we_just_emailed_to_you_If_you_didnt_receive_the_email_we_will_gladly_send_you_another": "¡Gracias por registrarte! Antes de comenzar, ¿podrías verificar tu dirección de correo electrónico haciendo clic en el enlace que acabamos de enviarte por correo electrónico? Si no recibiste el correo electrónico, con gusto te enviaremos otro.",
  "words.a_new_verification_link_has_been_sent_to_the_email_address_you_provided_during_registration": "Se ha enviado un nuevo enlace de verificación a la dirección de correo electrónico que proporcionaste durante el registro",
  "words.resend_verification_email": "Reenviar Correo de Verificación",
  "words.business_hours": "Horario de Negocios",
  "words.profile": "Perfil",
  "words.quiz": "Cuestionario",
  "words.my_data": "Mis Datos",
  "words.my_appointments": "Mis Citas",
  "words.previous_appointments": "Citas Anteriores",
  "words.upcoming_appointments": "Citas Futuras",
  "words.there_are_no_upcoming_appointments": "No hay citas futuras",
  "words.there_are_no_previous_appointments": "No hay citas anteriores",
  "words.navigation": "Navegación",
  "words.pending": "Pendiente",
  "words.approved": "Aprobado",
  "words.cancelled": "Cancelado",
  "words.declined": "Rechazado",
  "words.address": "Dirección",
  "words.notes": "Notas",
  "words.update_appointment": "Actualizar Cita",
  "words.cancel_appointment": "Cancelar Cita",
  "words.approve_appointment": "Aprobar Cita",
  "words.decline_appointment": "Rechazar Cita",
  "words.delete_appointment": "Eliminar Cita",
  "words.appointment_confirmed": "Cita Confirmada",
  "words.loading": "Cargando"
};
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_es
}, Symbol.toStringTag, { value: "Module" }));
const php_fr = {
  "auth.failed": "Ces informations d'identification ne correspondent pas à nos enregistrements.",
  "auth.password": "Le mot de passe fourni est incorrect.",
  "auth.throttle": "Trop de tentatives de connexion. Veuillez réessayer dans :seconds secondes.",
  "pagination.previous": "&laquo; Précédent",
  "pagination.next": "Suivant &raquo;",
  "passwords.reset": "Votre mot de passe a été réinitialisé !",
  "passwords.sent": "Nous avons envoyé votre lien de réinitialisation de mot de passe par e-mail !",
  "passwords.throttled": "Veuillez patienter avant de réessayer.",
  "passwords.token": "Ce jeton de réinitialisation de mot de passe est invalide.",
  "passwords.user": "Nous ne trouvons pas d'utilisateur avec cette adresse e-mail.",
  "validation.accepted": "Le champ :attribute doit être accepté.",
  "validation.accepted_if": "Le champ :attribute doit être accepté lorsque :other est :value.",
  "validation.active_url": "Le champ :attribute n'est pas une URL valide.",
  "validation.after": "Le champ :attribute doit être une date postérieure à :date.",
  "validation.after_or_equal": "Le champ :attribute doit être une date postérieure ou égale à :date.",
  "validation.alpha": "Le champ :attribute ne peut contenir que des lettres.",
  "validation.alpha_dash": "Le champ :attribute ne peut contenir que des lettres, des chiffres, des tirets et des underscores.",
  "validation.alpha_num": "Le champ :attribute ne peut contenir que des lettres et des chiffres.",
  "validation.array": "Le champ :attribute doit être un tableau.",
  "validation.ascii": "Le champ :attribute ne peut contenir que des caractères alphanumériques monocase et des symboles.",
  "validation.before": "Le champ :attribute doit être une date antérieure à :date.",
  "validation.before_or_equal": "Le champ :attribute doit être une date antérieure ou égale à :date.",
  "validation.between.array": "Le champ :attribute doit avoir entre :min et :max éléments.",
  "validation.between.file": "Le champ :attribute doit avoir une taille comprise entre :min et :max kilo-octets.",
  "validation.between.numeric": "Le champ :attribute doit être compris entre :min et :max.",
  "validation.between.string": "Le champ :attribute doit avoir entre :min et :max caractères.",
  "validation.boolean": "Le champ :attribute doit être vrai ou faux.",
  "validation.confirmed": "La confirmation du champ :attribute ne correspond pas.",
  "validation.current_password": "Le mot de passe est incorrect.",
  "validation.date": "Le champ :attribute n'est pas une date valide.",
  "validation.date_equals": "Le champ :attribute doit être une date égale à :date.",
  "validation.date_format": "Le champ :attribute ne correspond pas au format :format.",
  "validation.decimal": "Le champ :attribute doit comporter :decimal décimales.",
  "validation.declined": "Le champ :attribute doit être décliné.",
  "validation.declined_if": "Le champ :attribute doit être décliné lorsque :other est :value.",
  "validation.different": "Les champs :attribute et :other doivent être différents.",
  "validation.digits": "Le champ :attribute doit comporter :digits chiffres.",
  "validation.digits_between": "Le champ :attribute doit comporter entre :min et :max chiffres.",
  "validation.dimensions": "Le champ :attribute comporte des dimensions d'image non valides.",
  "validation.distinct": "Le champ :attribute a une valeur en double.",
  "validation.doesnt_end_with": "Le champ :attribute ne peut pas se terminer par l'un des éléments suivants : :values.",
  "validation.doesnt_start_with": "Le champ :attribute ne peut pas commencer par l'un des éléments suivants : :values.",
  "validation.email": "Le champ :attribute doit être une adresse e-mail valide.",
  "validation.ends_with": "Le champ :attribute doit se terminer par l'un des éléments suivants : :values.",
  "validation.enum": "La valeur sélectionnée pour le champ :attribute est invalide.",
  "validation.exists": "La valeur sélectionnée pour le champ :attribute est invalide.",
  "validation.file": "Le champ :attribute doit être un fichier.",
  "validation.filled": "Le champ :attribute doit avoir une valeur.",
  "validation.gt.array": "Le champ :attribute doit comporter plus de :value éléments.",
  "validation.gt.file": "Le champ :attribute doit être supérieur à :value kilo-octets.",
  "validation.gt.numeric": "Le champ :attribute doit être supérieur à :value.",
  "validation.gt.string": "Le champ :attribute doit comporter plus de :value caractères.",
  "validation.gte.array": "Le champ :attribute doit comporter au moins :value éléments.",
  "validation.gte.file": "Le champ :attribute doit être supérieur ou égal à :value kilo-octets.",
  "validation.gte.numeric": "Le champ :attribute doit être supérieur ou égal à :value.",
  "validation.gte.string": "Le champ :attribute doit comporter au moins :value caractères.",
  "validation.image": "Le champ :attribute doit être une image.",
  "validation.in": "La valeur sélectionnée pour le champ :attribute est invalide.",
  "validation.in_array": "Le champ :attribute n'existe pas dans :other.",
  "validation.integer": "Le champ :attribute doit être un entier.",
  "validation.ip": "Le champ :attribute doit être une adresse IP valide.",
  "validation.ipv4": "Le champ :attribute doit être une adresse IPv4 valide.",
  "validation.ipv6": "Le champ :attribute doit être une adresse IPv6 valide.",
  "validation.json": "Le champ :attribute doit être une chaîne JSON valide.",
  "validation.lowercase": "Le champ :attribute doit être en minuscules.",
  "validation.lt.array": "Le champ :attribute doit comporter moins de :value éléments.",
  "validation.lt.file": "Le champ :attribute doit avoir une taille inférieure à :value kilo-octets.",
  "validation.lt.numeric": "Le champ :attribute doit être inférieur à :value.",
  "validation.lt.string": "Le champ :attribute doit comporter moins de :value caractères.",
  "validation.lte.array": "Le champ :attribute ne doit pas comporter plus de :value éléments.",
  "validation.lte.file": "Le champ :attribute doit avoir une taille inférieure ou égale à :value kilo-octets.",
  "validation.lte.numeric": "Le champ :attribute doit être inférieur ou égal à :value.",
  "validation.lte.string": "Le champ :attribute doit comporter au plus :value caractères.",
  "validation.mac_address": "Le champ :attribute doit être une adresse MAC valide.",
  "validation.max.array": "Le champ :attribute ne doit pas comporter plus de :max éléments.",
  "validation.max.file": "Le champ :attribute ne doit pas dépasser :max kilo-octets.",
  "validation.max.numeric": "Le champ :attribute ne doit pas être supérieur à :max.",
  "validation.max.string": "Le champ :attribute ne doit pas comporter plus de :max caractères.",
  "validation.max_digits": "Le champ :attribute ne doit pas comporter plus de :max chiffres.",
  "validation.mimes": "Le champ :attribute doit être un fichier de type :values.",
  "validation.mimetypes": "Le champ :attribute doit être un fichier de type :values.",
  "validation.min.array": "Le champ :attribute doit comporter au moins :min éléments.",
  "validation.min.file": "Le champ :attribute doit avoir une taille d'au moins :min kilo-octets.",
  "validation.min.numeric": "Le champ :attribute doit être au moins égal à :min.",
  "validation.min.string": "Le champ :attribute doit comporter au moins :min caractères.",
  "validation.min_digits": "Le champ :attribute doit comporter au moins :min chiffres.",
  "validation.missing": "Le champ :attribute doit être manquant.",
  "validation.missing_if": "Le champ :attribute doit être manquant lorsque :other est :value.",
  "validation.missing_unless": "Le champ :attribute doit être manquant à moins que :other soit :value.",
  "validation.missing_with": "Le champ :attribute doit être manquant lorsque :values est présent.",
  "validation.missing_with_all": "Le champ :attribute doit être manquant lorsque :values sont présents.",
  "validation.multiple_of": "Le champ :attribute doit être un multiple de :value.",
  "validation.not_in": "La valeur sélectionnée pour le champ :attribute est invalide.",
  "validation.not_regex": "Le format du champ :attribute est invalide.",
  "validation.numeric": "Le champ :attribute doit être un nombre.",
  "validation.password.letters": "Le champ :attribute doit contenir au moins une lettre.",
  "validation.password.mixed": "Le champ :attribute doit contenir au moins une lettre majuscule et une lettre minuscule.",
  "validation.password.numbers": "Le champ :attribute doit contenir au moins un chiffre.",
  "validation.password.symbols": "Le champ :attribute doit contenir au moins un symbole.",
  "validation.password.uncompromised": "Le champ :attribute donné est apparu dans une fuite de données. Veuillez choisir un autre :attribute.",
  "validation.present": "Le champ :attribute doit être présent.",
  "validation.prohibited": "Le champ :attribute est interdit.",
  "validation.prohibited_if": "Le champ :attribute est interdit lorsque :other est :value.",
  "validation.prohibited_unless": "Le champ :attribute est interdit sauf si :other est dans :values.",
  "validation.prohibits": "Le champ :attribute interdit la présence de :other.",
  "validation.regex": "Le format du champ :attribute est invalide.",
  "validation.required": "Le champ :attribute est obligatoire.",
  "validation.required_array_keys": "Le champ :attribute doit contenir des entrées pour :values.",
  "validation.required_if": "Le champ :attribute est obligatoire lorsque :other est :value.",
  "validation.required_if_accepted": "Le champ :attribute est obligatoire lorsque :other est accepté.",
  "validation.required_unless": "Le champ :attribute est obligatoire sauf si :other est dans :values.",
  "validation.required_with": "Le champ :attribute est obligatoire lorsque :values est présent.",
  "validation.required_with_all": "Le champ :attribute est obligatoire lorsque :values sont présents.",
  "validation.required_without": "Le champ :attribute est obligatoire lorsque :values n'est pas présent.",
  "validation.required_without_all": "Le champ :attribute est obligatoire lorsqu'aucun des champs :values est présent.",
  "validation.same": "Les champs :attribute et :other doivent correspondre.",
  "validation.size.array": "Le champ :attribute doit contenir :size éléments.",
  "validation.size.file": "Le champ :attribute doit avoir une taille de :size kilo-octets.",
  "validation.size.numeric": "Le champ :attribute doit être égal à :size.",
  "validation.size.string": "Le champ :attribute doit comporter :size caractères.",
  "validation.starts_with": "Le champ :attribute doit commencer par l'une des valeurs suivantes :values.",
  "validation.string": "Le champ :attribute doit être une chaîne de caractères.",
  "validation.timezone": "Le champ :attribute doit être un fuseau horaire valide.",
  "validation.unique": "Le champ :attribute a déjà été utilisé.",
  "validation.uploaded": "Le chargement du fichier :attribute a échoué.",
  "validation.uppercase": "Le champ :attribute doit être en majuscules.",
  "validation.url": "Le champ :attribute doit être une URL valide.",
  "validation.ulid": "Le champ :attribute doit être un ULID valide.",
  "validation.uuid": "Le champ :attribute doit être un UUID valide.",
  "validation.custom.attribute-name.rule-name": "custom-message",
  "words.my_drive_school": "Mon Auto-École",
  "words.home": "Accueil",
  "words.welcome": "Bienvenue",
  "words.choose_locale": "Choisir la langue",
  "words.profile_photo": "Photo de profil",
  "words.upload": "Télécharger",
  "words.uploaded": "Téléchargé",
  "words.activate_notifications": "Activer les notifications",
  "words.delete_account": "Supprimer le compte",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_before_deleting_your_account_please_download_any_data_or_information_that_you_wish_to_retain": "Une fois que votre compte est supprimé, toutes ses ressources et données seront définitivement supprimées. Avant de supprimer votre compte, veuillez télécharger toutes les données ou informations que vous souhaitez conserver.",
  "words.are_you_sure_you_want_to_delete_your_account": "Êtes-vous sûr de vouloir supprimer votre compte ?",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_please_enter_your_password_to_confirm_you_would_like_to_permanently_delete_your_account": "Une fois que votre compte est supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez entrer votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte.",
  "words.save": "Enregistrer",
  "words.saved": "Enregistré",
  "words.cancel": "Annuler",
  "words.firstname": "Prénom",
  "words.lastname": "Nom de famille",
  "words.username": "Nom d'utilisateur",
  "words.gender": "Genre",
  "words.male": "Homme",
  "words.female": "Femme",
  "words.email": "E-mail",
  "words.your_email_address_is_unverified": "Votre adresse e-mail n'est pas vérifiée.",
  "words.click_here_to_re_send_the_verification_email": "Cliquez ici pour renvoyer l'e-mail de vérification.",
  "words.a_new_verification_link_has_been_sent_to_your_email_address": "Un nouveau lien de vérification a été envoyé à votre adresse e-mail.",
  "words.password": "Mot de passe",
  "words.update_password": "Mettre à jour le mot de passe",
  "words.current_password": "Mot de passe actuel",
  "words.new_password": "Nouveau mot de passe",
  "words.confirm": "Confirmer",
  "words.confirm_password": "Confirmer le mot de passe",
  "words.ensure_your_account_is_using_a_long_random_password_to_stay_secure": "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester sécurisé.",
  "words.profile_information": "Informations de profil",
  "words.update_your_account_profile_information_and_email_address": "Mettez à jour les informations de profil de votre compte et l'adresse e-mail",
  "words.appointment_requests": "Demandes de rendez-vous",
  "words.requester": "Demandeur",
  "words.at": "à",
  "words.appointments": "Rendez-vous",
  "words.available_appointments": "Rendez-vous disponibles",
  "words.admin_dashboard": "Tableau de bord administrateur",
  "words.settings": "Paramètres",
  "words.this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing": "Il s'agit d'une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer",
  "words.forgot_your_password_no_problem_just_let_us_know_your_email_address_and_we_will_email_you_a_password_reset_link_that_will_allow_you_to_choose_a_new_one": "Vous avez oublié votre mot de passe ? Pas de problème. Indiquez simplement votre adresse e-mail, et nous vous enverrons un lien de réinitialisation de mot de passe par e-mail, qui vous permettra d'en choisir un nouveau.",
  "words.email_username": "E-mail / Nom d'utilisateur",
  "words.email_password_reset_link": "Envoyer le lien de réinitialisation du mot de passe par e-mail",
  "words.register": "S'inscrire",
  "words.login": "Se connecter",
  "words.logout": "Se déconnecter",
  "words.remember_me": "Se souvenir de moi",
  "words.forgot_your_password": "Mot de passe oublié ?",
  "words.reset_password": "Réinitialiser le mot de passe",
  "words.thanks_for_signing_up_before_getting_started_could_you_verify_your_email_address_by_clicking_on_the_link_we_just_emailed_to_you_If_you_didnt_receive_the_email_we_will_gladly_send_you_another": "Merci de vous être inscrit ! Avant de commencer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer par e-mail ? Si vous n'avez pas reçu l'e-mail, nous vous en enverrons volontiers un autre.",
  "words.a_new_verification_link_has_been_sent_to_the_email_address_you_provided_during_registration": "Un nouveau lien de vérification a été envoyé à l'adresse e-mail que vous avez fournie lors de l'inscription",
  "words.resend_verification_email": "Renvoyer l'e-mail de vérification",
  "words.business_hours": "Heures d'ouverture",
  "words.profile": "Profil",
  "words.quiz": "Quiz",
  "words.my_data": "Mes données",
  "words.my_appointments": "Mes rendez-vous",
  "words.previous_appointments": "Rendez-vous précédents",
  "words.upcoming_appointments": "Rendez-vous à venir",
  "words.there_are_no_upcoming_appointments": "Il n'y a pas de rendez-vous à venir",
  "words.there_are_no_previous_appointments": "Il n'y a pas de rendez-vous précédents",
  "words.navigation": "Navigation",
  "words.pending": "En attente",
  "words.approved": "Approuvés",
  "words.cancelled": "Annulés",
  "words.declined": "Refusés",
  "words.address": "Adresse",
  "words.notes": "Notes",
  "words.update_appointment": "Mettre à jour le rendez-vous",
  "words.cancel_appointment": "Annuler le rendez-vous",
  "words.approve_appointment": "Approuver le rendez-vous",
  "words.decline_appointment": "Refuser le rendez-vous",
  "words.delete_appointment": "Supprimer le rendez-vous",
  "words.appointment_confirmed": "Rendez-vous confirmé",
  "words.loading": "Chargement"
};
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_fr
}, Symbol.toStringTag, { value: "Module" }));
const php_hi = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset!",
  "passwords.sent": "We have emailed your password reset link!",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute must be accepted.",
  "validation.accepted_if": "The :attribute must be accepted when :other is :value.",
  "validation.active_url": "The :attribute is not a valid URL.",
  "validation.after": "The :attribute must be a date after :date.",
  "validation.after_or_equal": "The :attribute must be a date after or equal to :date.",
  "validation.alpha": "The :attribute must only contain letters.",
  "validation.alpha_dash": "The :attribute must only contain letters, numbers, dashes and underscores.",
  "validation.alpha_num": "The :attribute must only contain letters and numbers.",
  "validation.array": "The :attribute must be an array.",
  "validation.ascii": "The :attribute must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute must be a date before :date.",
  "validation.before_or_equal": "The :attribute must be a date before or equal to :date.",
  "validation.between.array": "The :attribute must have between :min and :max items.",
  "validation.between.file": "The :attribute must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute must be between :min and :max.",
  "validation.between.string": "The :attribute must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.confirmed": "The :attribute confirmation does not match.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute is not a valid date.",
  "validation.date_equals": "The :attribute must be a date equal to :date.",
  "validation.date_format": "The :attribute does not match the format :format.",
  "validation.decimal": "The :attribute must have :decimal decimal places.",
  "validation.declined": "The :attribute must be declined.",
  "validation.declined_if": "The :attribute must be declined when :other is :value.",
  "validation.different": "The :attribute and :other must be different.",
  "validation.digits": "The :attribute must be :digits digits.",
  "validation.digits_between": "The :attribute must be between :min and :max digits.",
  "validation.dimensions": "The :attribute has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute may not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute may not start with one of the following: :values.",
  "validation.email": "The :attribute must be a valid email address.",
  "validation.ends_with": "The :attribute must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.file": "The :attribute must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute must have more than :value items.",
  "validation.gt.file": "The :attribute must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute must be greater than :value.",
  "validation.gt.string": "The :attribute must be greater than :value characters.",
  "validation.gte.array": "The :attribute must have :value items or more.",
  "validation.gte.file": "The :attribute must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute must be greater than or equal to :value characters.",
  "validation.image": "The :attribute must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field does not exist in :other.",
  "validation.integer": "The :attribute must be an integer.",
  "validation.ip": "The :attribute must be a valid IP address.",
  "validation.ipv4": "The :attribute must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute must be a valid IPv6 address.",
  "validation.json": "The :attribute must be a valid JSON string.",
  "validation.lowercase": "The :attribute must be lowercase.",
  "validation.lt.array": "The :attribute must have less than :value items.",
  "validation.lt.file": "The :attribute must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute must be less than :value.",
  "validation.lt.string": "The :attribute must be less than :value characters.",
  "validation.lte.array": "The :attribute must not have more than :value items.",
  "validation.lte.file": "The :attribute must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute must be less than or equal to :value.",
  "validation.lte.string": "The :attribute must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute must be a valid MAC address.",
  "validation.max.array": "The :attribute must not have more than :max items.",
  "validation.max.file": "The :attribute must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute must not be greater than :max.",
  "validation.max.string": "The :attribute must not be greater than :max characters.",
  "validation.max_digits": "The :attribute must not have more than :max digits.",
  "validation.mimes": "The :attribute must be a file of type: :values.",
  "validation.mimetypes": "The :attribute must be a file of type: :values.",
  "validation.min.array": "The :attribute must have at least :min items.",
  "validation.min.file": "The :attribute must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute must be at least :min.",
  "validation.min.string": "The :attribute must be at least :min characters.",
  "validation.min_digits": "The :attribute must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute format is invalid.",
  "validation.numeric": "The :attribute must be a number.",
  "validation.password.letters": "The :attribute must contain at least one letter.",
  "validation.password.mixed": "The :attribute must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute must contain at least one number.",
  "validation.password.symbols": "The :attribute must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute and :other must match.",
  "validation.size.array": "The :attribute must contain :size items.",
  "validation.size.file": "The :attribute must be :size kilobytes.",
  "validation.size.numeric": "The :attribute must be :size.",
  "validation.size.string": "The :attribute must be :size characters.",
  "validation.starts_with": "The :attribute must start with one of the following: :values.",
  "validation.string": "The :attribute must be a string.",
  "validation.timezone": "The :attribute must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute must be uppercase.",
  "validation.url": "The :attribute must be a valid URL.",
  "validation.ulid": "The :attribute must be a valid ULID.",
  "validation.uuid": "The :attribute must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message",
  "words.my_drive_school": "मेरे ड्राइव स्कूल",
  "words.home": "होम",
  "words.welcome": "स्वागत है",
  "words.choose_locale": "लोकेल चुनें",
  "words.profile_photo": "प्रोफ़ाइल फ़ोटो",
  "words.upload": "अपलोड करें",
  "words.uploaded": "अपलोड किया गया",
  "words.activate_notifications": "सूचनाएँ सक्रिय करें",
  "words.delete_account": "खाता हटाएं",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_before_deleting_your_account_please_download_any_data_or_information_that_you_wish_to_retain": "एक बार आपका खाता हटा दिया जाता है, तो इसके सभी संसाधन और डेटा स्थायिक रूप से हटा दिया जाएगा। कृपया अपने खाता को हटाने से पहले उन सभी डेटा या जानकारी को डाउनलोड करें जो आप रखना चाहते हैं",
  "words.are_you_sure_you_want_to_delete_your_account": "क्या आप निश्चित रूप से अपना खाता हटाना चाहते हैं?",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_please_enter_your_password_to_confirm_you_would_like_to_permanently_delete_your_account": "एक बार आपका खाता हटा दिया जाता है, तो इसके सभी संसाधन और डेटा स्थायिक रूप से हटा दिया जाएगा। कृपया अपना पासवर्ड दर्ज करें और पुष्टि करें कि आप अपने खाता को स्थायिक रूप से हटाना चाहते हैं।",
  "words.save": "सहेजें",
  "words.saved": "सहेजा गया",
  "words.cancel": "रद्द करें",
  "words.firstname": "पहला नाम",
  "words.lastname": "उपनाम",
  "words.username": "उपयोगकर्ता नाम",
  "words.gender": "लिंग",
  "words.male": "पुरुष",
  "words.female": "महिला",
  "words.email": "ईमेल",
  "words.your_email_address_is_unverified": "आपका ईमेल पता सत्यापित नहीं है।",
  "words.click_here_to_re_send_the_verification_email": "सत्यापन ईमेल पुनः भेजने के लिए यहाँ क्लिक करें।",
  "words.a_new_verification_link_has_been_sent_to_your_email_address": "आपके ईमेल पते पर एक नई सत्यापन लिंक भेज दिया गया है।",
  "words.password": "पासवर्ड",
  "words.update_password": "पासवर्ड अपडेट करें",
  "words.current_password": "वर्तमान पासवर्ड",
  "words.new_password": "नया पासवर्ड",
  "words.confirm": "पुष्टि करें",
  "words.confirm_password": "पासवर्ड की पुष्टि करें",
  "words.ensure_your_account_is_using_a_long_random_password_to_stay_secure": "अपने खाते का सुरक्षित रहने के लिए एक लंबा, यादृच्छिक पासवर्ड का उपयोग करने की सुनिश्चित करें।",
  "words.profile_information": "प्रोफ़ाइल जानकारी",
  "words.update_your_account_profile_information_and_email_address": "अपने खाते की प्रोफ़ाइल जानकारी और ईमेल पता अपडेट करें",
  "words.appointment_requests": "अपॉइंटमेंट अनुरोध",
  "words.requester": "अनुरोधकर्ता",
  "words.at": "पर",
  "words.appointments": "अपॉइंटमेंट्स",
  "words.available_appointments": "उपलब्ध अपॉइंटमेंट्स",
  "words.admin_dashboard": "व्यवस्थापक डैशबोर्ड",
  "words.settings": "सेटिंग्स",
  "words.this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing": "यह एप्लिकेशन का सुरक्षित क्षेत्र है। कृपया जारी रहने से पहले अपने पासवर्ड की पुष्टि करें",
  "words.forgot_your_password_no_problem_just_let_us_know_your_email_address_and_we_will_email_you_a_password_reset_link_that_will_allow_you_to_choose_a_new_one": "पासवर्ड भूल गए? कोई समस्या नहीं है। बस हमें अपना ईमेल पता बताएं और हम आपको एक पासवर्ड रीसेट लिंक भेजेंगे जिससे आपको एक नया पासवर्ड चुनने की अनुमति देगा।",
  "words.email_username": "ईमेल / उपयोगकर्ता नाम",
  "words.email_password_reset_link": "ईमेल पासवर्ड रीसेट लिंक",
  "words.register": "रजिस्टर करें",
  "words.login": "लॉगिन",
  "words.logout": "लॉगआउट",
  "words.remember_me": "मुझे याद रखें",
  "words.forgot_your_password": "क्या आपने अपना पासवर्ड भूल गए?",
  "words.reset_password": "पासवर्ड रीसेट करें",
  "words.thanks_for_signing_up_before_getting_started_could_you_verify_your_email_address_by_clicking_on_the_link_we_just_emailed_to_you_If_you_didnt_receive_the_email_we_will_gladly_send_you_another": "साइन अप करने के लिए धन्यवाद! शुरुआत करने से पहले, क्या आप हमें एक ईमेल लिंक पर क्लिक करके अपना ईमेल पता सत्यापित कर सकते हैं, जिसे हमने आपको अभी भेजा है? अगर आपको ईमेल नहीं मिला, तो हम आपको दुसरा ईमेल भेजेंगे।",
  "words.a_new_verification_link_has_been_sent_to_the_email_address_you_provided_during_registration": "रजिस्ट्रेशन के दौरान आपके द्वारा प्रदान किए गए ईमेल पते पर एक नई सत्यापन लिंक भेज दिया गया है",
  "words.resend_verification_email": "सत्यापन ईमेल फिर से भेजें",
  "words.business_hours": "व्यापारिक समय",
  "words.profile": "प्रोफ़ाइल",
  "words.quiz": "क्विज़",
  "words.my_data": "मेरा डेटा",
  "words.my_appointments": "मेरे अपॉइंटमेंट्स",
  "words.previous_appointments": "पिछले अपॉइंटमेंट्स",
  "words.upcoming_appointments": "आगामी अपॉइंटमेंट्स",
  "words.there_are_no_upcoming_appointments": "कोई आगामी अपॉइंटमेंट्स नहीं हैं",
  "words.there_are_no_previous_appointments": "कोई पिछले अपॉइंटमेंट्स नहीं हैं",
  "words.navigation": "नेविगेशन",
  "words.pending": "लंबित",
  "words.approved": "मंजूर",
  "words.cancelled": "रद्द किया गया",
  "words.declined": "अस्वीकृत",
  "words.address": "पता",
  "words.notes": "टिप्पणियाँ",
  "words.update_appointment": "अपॉइंटमेंट अपडेट करें",
  "words.cancel_appointment": "अपॉइंटमेंट रद्द करें",
  "words.approve_appointment": "अपॉइंटमेंट मंजूर करें",
  "words.decline_appointment": "अपॉइंटमेंट अस्वीकृत करें",
  "words.delete_appointment": "अपॉइंटमेंट हटाएं",
  "words.appointment_confirmed": "अपॉइंटमेंट पुष्टि की गई",
  "words.loading": "लोड हो रहा है"
};
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_hi
}, Symbol.toStringTag, { value: "Module" }));
const php_it = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset!",
  "passwords.sent": "We have emailed your password reset link!",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute must be accepted.",
  "validation.accepted_if": "The :attribute must be accepted when :other is :value.",
  "validation.active_url": "The :attribute is not a valid URL.",
  "validation.after": "The :attribute must be a date after :date.",
  "validation.after_or_equal": "The :attribute must be a date after or equal to :date.",
  "validation.alpha": "The :attribute must only contain letters.",
  "validation.alpha_dash": "The :attribute must only contain letters, numbers, dashes and underscores.",
  "validation.alpha_num": "The :attribute must only contain letters and numbers.",
  "validation.array": "The :attribute must be an array.",
  "validation.ascii": "The :attribute must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute must be a date before :date.",
  "validation.before_or_equal": "The :attribute must be a date before or equal to :date.",
  "validation.between.array": "The :attribute must have between :min and :max items.",
  "validation.between.file": "The :attribute must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute must be between :min and :max.",
  "validation.between.string": "The :attribute must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.confirmed": "The :attribute confirmation does not match.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute is not a valid date.",
  "validation.date_equals": "The :attribute must be a date equal to :date.",
  "validation.date_format": "The :attribute does not match the format :format.",
  "validation.decimal": "The :attribute must have :decimal decimal places.",
  "validation.declined": "The :attribute must be declined.",
  "validation.declined_if": "The :attribute must be declined when :other is :value.",
  "validation.different": "The :attribute and :other must be different.",
  "validation.digits": "The :attribute must be :digits digits.",
  "validation.digits_between": "The :attribute must be between :min and :max digits.",
  "validation.dimensions": "The :attribute has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute may not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute may not start with one of the following: :values.",
  "validation.email": "The :attribute must be a valid email address.",
  "validation.ends_with": "The :attribute must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.file": "The :attribute must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute must have more than :value items.",
  "validation.gt.file": "The :attribute must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute must be greater than :value.",
  "validation.gt.string": "The :attribute must be greater than :value characters.",
  "validation.gte.array": "The :attribute must have :value items or more.",
  "validation.gte.file": "The :attribute must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute must be greater than or equal to :value characters.",
  "validation.image": "The :attribute must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field does not exist in :other.",
  "validation.integer": "The :attribute must be an integer.",
  "validation.ip": "The :attribute must be a valid IP address.",
  "validation.ipv4": "The :attribute must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute must be a valid IPv6 address.",
  "validation.json": "The :attribute must be a valid JSON string.",
  "validation.lowercase": "The :attribute must be lowercase.",
  "validation.lt.array": "The :attribute must have less than :value items.",
  "validation.lt.file": "The :attribute must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute must be less than :value.",
  "validation.lt.string": "The :attribute must be less than :value characters.",
  "validation.lte.array": "The :attribute must not have more than :value items.",
  "validation.lte.file": "The :attribute must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute must be less than or equal to :value.",
  "validation.lte.string": "The :attribute must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute must be a valid MAC address.",
  "validation.max.array": "The :attribute must not have more than :max items.",
  "validation.max.file": "The :attribute must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute must not be greater than :max.",
  "validation.max.string": "The :attribute must not be greater than :max characters.",
  "validation.max_digits": "The :attribute must not have more than :max digits.",
  "validation.mimes": "The :attribute must be a file of type: :values.",
  "validation.mimetypes": "The :attribute must be a file of type: :values.",
  "validation.min.array": "The :attribute must have at least :min items.",
  "validation.min.file": "The :attribute must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute must be at least :min.",
  "validation.min.string": "The :attribute must be at least :min characters.",
  "validation.min_digits": "The :attribute must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute format is invalid.",
  "validation.numeric": "The :attribute must be a number.",
  "validation.password.letters": "The :attribute must contain at least one letter.",
  "validation.password.mixed": "The :attribute must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute must contain at least one number.",
  "validation.password.symbols": "The :attribute must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute and :other must match.",
  "validation.size.array": "The :attribute must contain :size items.",
  "validation.size.file": "The :attribute must be :size kilobytes.",
  "validation.size.numeric": "The :attribute must be :size.",
  "validation.size.string": "The :attribute must be :size characters.",
  "validation.starts_with": "The :attribute must start with one of the following: :values.",
  "validation.string": "The :attribute must be a string.",
  "validation.timezone": "The :attribute must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute must be uppercase.",
  "validation.url": "The :attribute must be a valid URL.",
  "validation.ulid": "The :attribute must be a valid ULID.",
  "validation.uuid": "The :attribute must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message",
  "words.my_drive_school": "La Mia Scuola di Guida",
  "words.home": "Home",
  "words.welcome": "Benvenuto",
  "words.choose_locale": "Scegli la Lingua",
  "words.profile_photo": "Foto del Profilo",
  "words.upload": "Carica",
  "words.uploaded": "Caricato",
  "words.activate_notifications": "Attiva le Notifiche",
  "words.delete_account": "Elimina Account",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_before_deleting_your_account_please_download_any_data_or_information_that_you_wish_to_retain": "Una volta che il tuo account sarà eliminato, tutte le sue risorse e dati verranno eliminati definitivamente. Prima di eliminare il tuo account, per favore scarica tutti i dati o le informazioni che desideri conservare",
  "words.are_you_sure_you_want_to_delete_your_account": "Sei sicuro di voler eliminare il tuo account?",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_please_enter_your_password_to_confirm_you_would_like_to_permanently_delete_your_account": "Una volta che il tuo account sarà eliminato, tutte le sue risorse e dati verranno eliminati definitivamente. Per favore, inserisci la tua password per confermare che desideri eliminare definitivamente il tuo account.",
  "words.save": "Salva",
  "words.saved": "Salvato",
  "words.cancel": "Annulla",
  "words.firstname": "Nome",
  "words.lastname": "Cognome",
  "words.username": "Nome Utente",
  "words.gender": "Genere",
  "words.male": "Maschio",
  "words.female": "Femmina",
  "words.email": "Email",
  "words.your_email_address_is_unverified": "Il tuo indirizzo email non è verificato.",
  "words.click_here_to_re_send_the_verification_email": "Clicca qui per reinviare l'email di verifica.",
  "words.a_new_verification_link_has_been_sent_to_your_email_address": "Un nuovo link di verifica è stato inviato al tuo indirizzo email.",
  "words.password": "Password",
  "words.update_password": "Aggiorna Password",
  "words.current_password": "Password Attuale",
  "words.new_password": "Nuova Password",
  "words.confirm": "Conferma",
  "words.confirm_password": "Conferma Password",
  "words.ensure_your_account_is_using_a_long_random_password_to_stay_secure": "Assicurati che il tuo account stia utilizzando una password lunga e casuale per rimanere sicuro.",
  "words.profile_information": "Informazioni del Profilo",
  "words.update_your_account_profile_information_and_email_address": "Aggiorna le informazioni del tuo profilo e l'indirizzo email del tuo account",
  "words.appointment_requests": "Richieste di Appuntamento",
  "words.requester": "Richiedente",
  "words.at": "alle",
  "words.appointments": "Appuntamenti",
  "words.available_appointments": "Appuntamenti Disponibili",
  "words.admin_dashboard": "Pannello di Amministrazione",
  "words.settings": "Impostazioni",
  "words.this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing": "Questa è un'area sicura dell'applicazione. Per favore, conferma la tua password prima di continuare",
  "words.forgot_your_password_no_problem_just_let_us_know_your_email_address_and_we_will_email_you_a_password_reset_link_that_will_allow_you_to_choose_a_new_one": "Hai dimenticato la tua password? Nessun problema. Comunicaci il tuo indirizzo email e ti invieremo un link per reimpostare la password che ti consentirà di sceglierne una nuova.",
  "words.email_username": "Email / Nome Utente",
  "words.email_password_reset_link": "Email con Link per Reimpostare la Password",
  "words.register": "Registrati",
  "words.login": "Accedi",
  "words.logout": "Esci",
  "words.remember_me": "Ricordami",
  "words.forgot_your_password": "Hai dimenticato la password?",
  "words.reset_password": "Reimposta Password",
  "words.thanks_for_signing_up_before_getting_started_could_you_verify_your_email_address_by_clicking_on_the_link_we_just_emailed_to_you_If_you_didnt_receive_the_email_we_will_gladly_send_you_another": "Grazie per esserti registrato! Prima di iniziare, potresti confermare il tuo indirizzo email cliccando sul link che ti abbiamo appena inviato? Se non hai ricevuto l'email, saremo lieti di inviartene un'altra.",
  "words.a_new_verification_link_has_been_sent_to_the_email_address_you_provided_during_registration": "Un nuovo link di verifica è stato inviato all'indirizzo email che hai fornito durante la registrazione",
  "words.resend_verification_email": "Rispedisci Email di Verifica",
  "words.business_hours": "Orari di Apertura",
  "words.profile": "Profilo",
  "words.quiz": "Quiz",
  "words.my_data": "I Miei Dati",
  "words.my_appointments": "I Miei Appuntamenti",
  "words.previous_appointments": "Appuntamenti Precedenti",
  "words.upcoming_appointments": "Prossimi Appuntamenti",
  "words.there_are_no_upcoming_appointments": "Non ci sono appuntamenti futuri",
  "words.there_are_no_previous_appointments": "Non ci sono appuntamenti precedenti",
  "words.navigation": "Navigazione",
  "words.pending": "In Sospeso",
  "words.approved": "Approvato",
  "words.cancelled": "Annullato",
  "words.declined": "Rifiutato",
  "words.address": "Indirizzo",
  "words.notes": "Note",
  "words.update_appointment": "Aggiorna Appuntamento",
  "words.cancel_appointment": "Annulla Appuntamento",
  "words.approve_appointment": "Approva Appuntamento",
  "words.decline_appointment": "Rifiuta Appuntamento",
  "words.delete_appointment": "Elimina Appuntamento",
  "words.appointment_confirmed": "Appuntamento Confermato",
  "words.loading": "Caricamento"
};
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_it
}, Symbol.toStringTag, { value: "Module" }));
const php_ja = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset!",
  "passwords.sent": "We have emailed your password reset link!",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute must be accepted.",
  "validation.accepted_if": "The :attribute must be accepted when :other is :value.",
  "validation.active_url": "The :attribute is not a valid URL.",
  "validation.after": "The :attribute must be a date after :date.",
  "validation.after_or_equal": "The :attribute must be a date after or equal to :date.",
  "validation.alpha": "The :attribute must only contain letters.",
  "validation.alpha_dash": "The :attribute must only contain letters, numbers, dashes and underscores.",
  "validation.alpha_num": "The :attribute must only contain letters and numbers.",
  "validation.array": "The :attribute must be an array.",
  "validation.ascii": "The :attribute must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute must be a date before :date.",
  "validation.before_or_equal": "The :attribute must be a date before or equal to :date.",
  "validation.between.array": "The :attribute must have between :min and :max items.",
  "validation.between.file": "The :attribute must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute must be between :min and :max.",
  "validation.between.string": "The :attribute must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.confirmed": "The :attribute confirmation does not match.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute is not a valid date.",
  "validation.date_equals": "The :attribute must be a date equal to :date.",
  "validation.date_format": "The :attribute does not match the format :format.",
  "validation.decimal": "The :attribute must have :decimal decimal places.",
  "validation.declined": "The :attribute must be declined.",
  "validation.declined_if": "The :attribute must be declined when :other is :value.",
  "validation.different": "The :attribute and :other must be different.",
  "validation.digits": "The :attribute must be :digits digits.",
  "validation.digits_between": "The :attribute must be between :min and :max digits.",
  "validation.dimensions": "The :attribute has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute may not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute may not start with one of the following: :values.",
  "validation.email": "The :attribute must be a valid email address.",
  "validation.ends_with": "The :attribute must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.file": "The :attribute must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute must have more than :value items.",
  "validation.gt.file": "The :attribute must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute must be greater than :value.",
  "validation.gt.string": "The :attribute must be greater than :value characters.",
  "validation.gte.array": "The :attribute must have :value items or more.",
  "validation.gte.file": "The :attribute must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute must be greater than or equal to :value characters.",
  "validation.image": "The :attribute must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field does not exist in :other.",
  "validation.integer": "The :attribute must be an integer.",
  "validation.ip": "The :attribute must be a valid IP address.",
  "validation.ipv4": "The :attribute must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute must be a valid IPv6 address.",
  "validation.json": "The :attribute must be a valid JSON string.",
  "validation.lowercase": "The :attribute must be lowercase.",
  "validation.lt.array": "The :attribute must have less than :value items.",
  "validation.lt.file": "The :attribute must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute must be less than :value.",
  "validation.lt.string": "The :attribute must be less than :value characters.",
  "validation.lte.array": "The :attribute must not have more than :value items.",
  "validation.lte.file": "The :attribute must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute must be less than or equal to :value.",
  "validation.lte.string": "The :attribute must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute must be a valid MAC address.",
  "validation.max.array": "The :attribute must not have more than :max items.",
  "validation.max.file": "The :attribute must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute must not be greater than :max.",
  "validation.max.string": "The :attribute must not be greater than :max characters.",
  "validation.max_digits": "The :attribute must not have more than :max digits.",
  "validation.mimes": "The :attribute must be a file of type: :values.",
  "validation.mimetypes": "The :attribute must be a file of type: :values.",
  "validation.min.array": "The :attribute must have at least :min items.",
  "validation.min.file": "The :attribute must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute must be at least :min.",
  "validation.min.string": "The :attribute must be at least :min characters.",
  "validation.min_digits": "The :attribute must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute format is invalid.",
  "validation.numeric": "The :attribute must be a number.",
  "validation.password.letters": "The :attribute must contain at least one letter.",
  "validation.password.mixed": "The :attribute must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute must contain at least one number.",
  "validation.password.symbols": "The :attribute must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute and :other must match.",
  "validation.size.array": "The :attribute must contain :size items.",
  "validation.size.file": "The :attribute must be :size kilobytes.",
  "validation.size.numeric": "The :attribute must be :size.",
  "validation.size.string": "The :attribute must be :size characters.",
  "validation.starts_with": "The :attribute must start with one of the following: :values.",
  "validation.string": "The :attribute must be a string.",
  "validation.timezone": "The :attribute must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute must be uppercase.",
  "validation.url": "The :attribute must be a valid URL.",
  "validation.ulid": "The :attribute must be a valid ULID.",
  "validation.uuid": "The :attribute must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message",
  "words.my_drive_school": "私のドライブスクール",
  "words.home": "ホーム",
  "words.welcome": "ようこそ",
  "words.choose_locale": "言語を選択",
  "words.profile_photo": "プロフィール写真",
  "words.upload": "アップロード",
  "words.uploaded": "アップロード済み",
  "words.activate_notifications": "通知を有効にする",
  "words.delete_account": "アカウントを削除",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_before_deleting_your_account_please_download_any_data_or_information_that_you_wish_to_retain": "アカウントが削除されると、そのすべてのリソースとデータが永久に削除されます。アカウントを削除する前に、保持したいデータや情報をダウンロードしてください。",
  "words.are_you_sure_you_want_to_delete_your_account": "本当にアカウントを削除しますか？",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_please_enter_your_password_to_confirm_you_would_like_to_permanently_delete_your_account": "アカウントが削除されると、そのすべてのリソースとデータが永久に削除されます。アカウントを永久に削除するかどうかを確認するために、パスワードを入力してください。",
  "words.save": "保存",
  "words.saved": "保存済み",
  "words.cancel": "キャンセル",
  "words.firstname": "名",
  "words.lastname": "姓",
  "words.username": "ユーザー名",
  "words.gender": "性別",
  "words.male": "男性",
  "words.female": "女性",
  "words.email": "メール",
  "words.your_email_address_is_unverified": "あなたのメールアドレスは未確認です。",
  "words.click_here_to_re_send_the_verification_email": "確認メールを再送するにはここをクリック",
  "words.a_new_verification_link_has_been_sent_to_your_email_address": "新しい確認リンクがあなたのメールアドレスに送信されました。",
  "words.password": "パスワード",
  "words.update_password": "パスワードを更新",
  "words.current_password": "現在のパスワード",
  "words.new_password": "新しいパスワード",
  "words.confirm": "確認",
  "words.confirm_password": "パスワードを確認",
  "words.ensure_your_account_is_using_a_long_random_password_to_stay_secure": "アカウントが安全であるためには、長くランダムなパスワードを使用してください。",
  "words.profile_information": "プロフィール情報",
  "words.update_your_account_profile_information_and_email_address": "アカウントのプロフィール情報とメールアドレスを更新",
  "words.appointment_requests": "予約リクエスト",
  "words.requester": "リクエスター",
  "words.at": "時刻",
  "words.appointments": "予約",
  "words.available_appointments": "利用可能な予約",
  "words.admin_dashboard": "管理ダッシュボード",
  "words.settings": "設定",
  "words.this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing": "これはアプリケーションの安全なエリアです。続行する前にパスワードを確認してください。",
  "words.forgot_your_password_no_problem_just_let_us_know_your_email_address_and_we_will_email_you_a_password_reset_link_that_will_allow_you_to_choose_a_new_one": "パスワードを忘れましたか？ 問題ありません。お使いのメールアドレスをお知らせいただければ、新しいパスワードを選択できるパスワードリセットリンクをメールでお送りします。",
  "words.email_username": "メール / ユーザー名",
  "words.email_password_reset_link": "パスワードリセットリンクをメール",
  "words.register": "登録",
  "words.login": "ログイン",
  "words.logout": "ログアウト",
  "words.remember_me": "ログイン情報を記憶",
  "words.forgot_your_password": "パスワードを忘れた場合",
  "words.reset_password": "パスワードをリセット",
  "words.thanks_for_signing_up_before_getting_started_could_you_verify_your_email_address_by_clicking_on_the_link_we_just_emailed_to_you_If_you_didnt_receive_the_email_we_will_gladly_send_you_another": "サインアップしていただき、ありがとうございます！始める前に、お送りしたリンクをクリックしてメールアドレスを確認していただけますか？メールが届かない場合、別のメールをお送りいたします。",
  "words.a_new_verification_link_has_been_sent_to_the_email_address_you_provided_during_registration": "新しい確認リンクが、登録時に提供されたメールアドレスに送信されました。",
  "words.resend_verification_email": "確認メールを再送信",
  "words.business_hours": "営業時間",
  "words.profile": "プロフィール",
  "words.quiz": "クイズ",
  "words.my_data": "私のデータ",
  "words.my_appointments": "私の予約",
  "words.previous_appointments": "過去の予約",
  "words.upcoming_appointments": "今後の予約",
  "words.there_are_no_upcoming_appointments": "今後の予約はありません",
  "words.there_are_no_previous_appointments": "過去の予約はありません",
  "words.navigation": "ナビゲーション",
  "words.pending": "保留中",
  "words.approved": "承認済み",
  "words.cancelled": "キャンセル済み",
  "words.declined": "辞退済み",
  "words.address": "住所",
  "words.notes": "メモ",
  "words.update_appointment": "予約の更新",
  "words.cancel_appointment": "予約のキャンセル",
  "words.approve_appointment": "予約の承認",
  "words.decline_appointment": "予約の辞退",
  "words.delete_appointment": "予約の削除",
  "words.appointment_confirmed": "予約確定",
  "words.loading": "読み込み中"
};
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_ja
}, Symbol.toStringTag, { value: "Module" }));
const php_ru = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset!",
  "passwords.sent": "We have emailed your password reset link!",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute must be accepted.",
  "validation.accepted_if": "The :attribute must be accepted when :other is :value.",
  "validation.active_url": "The :attribute is not a valid URL.",
  "validation.after": "The :attribute must be a date after :date.",
  "validation.after_or_equal": "The :attribute must be a date after or equal to :date.",
  "validation.alpha": "The :attribute must only contain letters.",
  "validation.alpha_dash": "The :attribute must only contain letters, numbers, dashes and underscores.",
  "validation.alpha_num": "The :attribute must only contain letters and numbers.",
  "validation.array": "The :attribute must be an array.",
  "validation.ascii": "The :attribute must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute must be a date before :date.",
  "validation.before_or_equal": "The :attribute must be a date before or equal to :date.",
  "validation.between.array": "The :attribute must have between :min and :max items.",
  "validation.between.file": "The :attribute must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute must be between :min and :max.",
  "validation.between.string": "The :attribute must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.confirmed": "The :attribute confirmation does not match.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute is not a valid date.",
  "validation.date_equals": "The :attribute must be a date equal to :date.",
  "validation.date_format": "The :attribute does not match the format :format.",
  "validation.decimal": "The :attribute must have :decimal decimal places.",
  "validation.declined": "The :attribute must be declined.",
  "validation.declined_if": "The :attribute must be declined when :other is :value.",
  "validation.different": "The :attribute and :other must be different.",
  "validation.digits": "The :attribute must be :digits digits.",
  "validation.digits_between": "The :attribute must be between :min and :max digits.",
  "validation.dimensions": "The :attribute has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute may not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute may not start with one of the following: :values.",
  "validation.email": "The :attribute must be a valid email address.",
  "validation.ends_with": "The :attribute must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.file": "The :attribute must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute must have more than :value items.",
  "validation.gt.file": "The :attribute must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute must be greater than :value.",
  "validation.gt.string": "The :attribute must be greater than :value characters.",
  "validation.gte.array": "The :attribute must have :value items or more.",
  "validation.gte.file": "The :attribute must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute must be greater than or equal to :value characters.",
  "validation.image": "The :attribute must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field does not exist in :other.",
  "validation.integer": "The :attribute must be an integer.",
  "validation.ip": "The :attribute must be a valid IP address.",
  "validation.ipv4": "The :attribute must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute must be a valid IPv6 address.",
  "validation.json": "The :attribute must be a valid JSON string.",
  "validation.lowercase": "The :attribute must be lowercase.",
  "validation.lt.array": "The :attribute must have less than :value items.",
  "validation.lt.file": "The :attribute must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute must be less than :value.",
  "validation.lt.string": "The :attribute must be less than :value characters.",
  "validation.lte.array": "The :attribute must not have more than :value items.",
  "validation.lte.file": "The :attribute must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute must be less than or equal to :value.",
  "validation.lte.string": "The :attribute must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute must be a valid MAC address.",
  "validation.max.array": "The :attribute must not have more than :max items.",
  "validation.max.file": "The :attribute must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute must not be greater than :max.",
  "validation.max.string": "The :attribute must not be greater than :max characters.",
  "validation.max_digits": "The :attribute must not have more than :max digits.",
  "validation.mimes": "The :attribute must be a file of type: :values.",
  "validation.mimetypes": "The :attribute must be a file of type: :values.",
  "validation.min.array": "The :attribute must have at least :min items.",
  "validation.min.file": "The :attribute must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute must be at least :min.",
  "validation.min.string": "The :attribute must be at least :min characters.",
  "validation.min_digits": "The :attribute must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute format is invalid.",
  "validation.numeric": "The :attribute must be a number.",
  "validation.password.letters": "The :attribute must contain at least one letter.",
  "validation.password.mixed": "The :attribute must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute must contain at least one number.",
  "validation.password.symbols": "The :attribute must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute and :other must match.",
  "validation.size.array": "The :attribute must contain :size items.",
  "validation.size.file": "The :attribute must be :size kilobytes.",
  "validation.size.numeric": "The :attribute must be :size.",
  "validation.size.string": "The :attribute must be :size characters.",
  "validation.starts_with": "The :attribute must start with one of the following: :values.",
  "validation.string": "The :attribute must be a string.",
  "validation.timezone": "The :attribute must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute must be uppercase.",
  "validation.url": "The :attribute must be a valid URL.",
  "validation.ulid": "The :attribute must be a valid ULID.",
  "validation.uuid": "The :attribute must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message",
  "words.my_drive_school": "Моя автошкола",
  "words.home": "Главная",
  "words.welcome": "Добро пожаловать",
  "words.choose_locale": "Выбрать язык",
  "words.profile_photo": "Фото профиля",
  "words.upload": "Загрузить",
  "words.uploaded": "Загружено",
  "words.activate_notifications": "Включить уведомления",
  "words.delete_account": "Удалить аккаунт",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_before_deleting_your_account_please_download_any_data_or_information_that_you_wish_to_retain": "После удаления вашей учетной записи все ресурсы и данные будут безвозвратно удалены. Перед удалением аккаунта, пожалуйста, скачайте данные или информацию, которые вы хотите сохранить.",
  "words.are_you_sure_you_want_to_delete_your_account": "Вы уверены, что хотите удалить свой аккаунт?",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_please_enter_your_password_to_confirm_you_would_like_to_permanently_delete_your_account": "После удаления вашей учетной записи все ресурсы и данные будут безвозвратно удалены. Пожалуйста, введите свой пароль, чтобы подтвердить, что вы хотите удалить свой аккаунт без возможности восстановления.",
  "words.save": "Сохранить",
  "words.saved": "Сохранено",
  "words.cancel": "Отмена",
  "words.firstname": "Имя",
  "words.lastname": "Фамилия",
  "words.username": "Имя пользователя",
  "words.gender": "Пол",
  "words.male": "Мужской",
  "words.female": "Женский",
  "words.email": "Email",
  "words.your_email_address_is_unverified": "Ваш адрес электронной почты не подтвержден.",
  "words.click_here_to_re_send_the_verification_email": "Нажмите здесь, чтобы отправить повторное письмо с подтверждением.",
  "words.a_new_verification_link_has_been_sent_to_your_email_address": "На ваш адрес электронной почты была отправлена новая ссылка для подтверждения.",
  "words.password": "Пароль",
  "words.update_password": "Обновить пароль",
  "words.current_password": "Текущий пароль",
  "words.new_password": "Новый пароль",
  "words.confirm": "Подтвердить",
  "words.confirm_password": "Подтверждение пароля",
  "words.ensure_your_account_is_using_a_long_random_password_to_stay_secure": "Убедитесь, что ваш аккаунт использует длинный случайный пароль для обеспечения безопасности.",
  "words.profile_information": "Информация о профиле",
  "words.update_your_account_profile_information_and_email_address": "Обновите информацию о профиле и адрес электронной почты своего аккаунта",
  "words.appointment_requests": "Запросы на встречи",
  "words.requester": "Заявитель",
  "words.at": "в",
  "words.appointments": "Встречи",
  "words.available_appointments": "Доступные встречи",
  "words.admin_dashboard": "Панель администратора",
  "words.settings": "Настройки",
  "words.this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing": "Это защищенная область приложения. Пожалуйста, подтвердите свой пароль перед продолжением.",
  "words.forgot_your_password_no_problem_just_let_us_know_your_email_address_and_we_will_email_you_a_password_reset_link_that_will_allow_you_to_choose_a_new_one": "Забыли пароль? Нет проблем. Просто укажите свой адрес электронной почты, и мы отправим вам ссылку для сброса пароля, которая позволит вам выбрать новый.",
  "words.email_username": "Email / Имя пользователя",
  "words.email_password_reset_link": "Ссылка на сброс пароля по электронной почте",
  "words.register": "Регистрация",
  "words.login": "Войти",
  "words.logout": "Выйти",
  "words.remember_me": "Запомнить меня",
  "words.forgot_your_password": "Забыли пароль?",
  "words.reset_password": "Сбросить пароль",
  "words.thanks_for_signing_up_before_getting_started_could_you_verify_your_email_address_by_clicking_on_the_link_we_just_emailed_to_you_If_you_didnt_receive_the_email_we_will_gladly_send_you_another": "Спасибо за регистрацию! Прежде чем начать, не могли бы вы подтвердить свой адрес электронной почты, перейдя по ссылке, которую мы только что отправили вам по электронной почте? Если вы не получили письмо, мы с удовольствием отправим вам другое.",
  "words.a_new_verification_link_has_been_sent_to_the_email_address_you_provided_during_registration": "На адрес электронной почты, который вы указали при регистрации, была отправлена новая ссылка для подтверждения",
  "words.resend_verification_email": "Повторно отправить письмо с подтверждением",
  "words.business_hours": "Рабочее время",
  "words.profile": "Профиль",
  "words.quiz": "Викторина",
  "words.my_data": "Мои данные",
  "words.my_appointments": "Мои встречи",
  "words.previous_appointments": "Предыдущие встречи",
  "words.upcoming_appointments": "Предстоящие встречи",
  "words.there_are_no_upcoming_appointments": "Нет предстоящих встреч",
  "words.there_are_no_previous_appointments": "Нет предыдущих встреч",
  "words.navigation": "Навигация",
  "words.pending": "Ожидание",
  "words.approved": "Подтверждено",
  "words.cancelled": "Отменено",
  "words.declined": "Отклонено",
  "words.address": "Адрес",
  "words.notes": "Заметки",
  "words.update_appointment": "Обновить встречу",
  "words.cancel_appointment": "Отменить встречу",
  "words.approve_appointment": "Подтвердить встречу",
  "words.decline_appointment": "Отклонить встречу",
  "words.delete_appointment": "Удалить встречу",
  "words.appointment_confirmed": "Встреча подтверждена",
  "words.loading": "Загрузка"
};
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_ru
}, Symbol.toStringTag, { value: "Module" }));
const php_zh = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset!",
  "passwords.sent": "We have emailed your password reset link!",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute must be accepted.",
  "validation.accepted_if": "The :attribute must be accepted when :other is :value.",
  "validation.active_url": "The :attribute is not a valid URL.",
  "validation.after": "The :attribute must be a date after :date.",
  "validation.after_or_equal": "The :attribute must be a date after or equal to :date.",
  "validation.alpha": "The :attribute must only contain letters.",
  "validation.alpha_dash": "The :attribute must only contain letters, numbers, dashes and underscores.",
  "validation.alpha_num": "The :attribute must only contain letters and numbers.",
  "validation.array": "The :attribute must be an array.",
  "validation.ascii": "The :attribute must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute must be a date before :date.",
  "validation.before_or_equal": "The :attribute must be a date before or equal to :date.",
  "validation.between.array": "The :attribute must have between :min and :max items.",
  "validation.between.file": "The :attribute must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute must be between :min and :max.",
  "validation.between.string": "The :attribute must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.confirmed": "The :attribute confirmation does not match.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute is not a valid date.",
  "validation.date_equals": "The :attribute must be a date equal to :date.",
  "validation.date_format": "The :attribute does not match the format :format.",
  "validation.decimal": "The :attribute must have :decimal decimal places.",
  "validation.declined": "The :attribute must be declined.",
  "validation.declined_if": "The :attribute must be declined when :other is :value.",
  "validation.different": "The :attribute and :other must be different.",
  "validation.digits": "The :attribute must be :digits digits.",
  "validation.digits_between": "The :attribute must be between :min and :max digits.",
  "validation.dimensions": "The :attribute has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute may not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute may not start with one of the following: :values.",
  "validation.email": "The :attribute must be a valid email address.",
  "validation.ends_with": "The :attribute must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.file": "The :attribute must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute must have more than :value items.",
  "validation.gt.file": "The :attribute must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute must be greater than :value.",
  "validation.gt.string": "The :attribute must be greater than :value characters.",
  "validation.gte.array": "The :attribute must have :value items or more.",
  "validation.gte.file": "The :attribute must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute must be greater than or equal to :value characters.",
  "validation.image": "The :attribute must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field does not exist in :other.",
  "validation.integer": "The :attribute must be an integer.",
  "validation.ip": "The :attribute must be a valid IP address.",
  "validation.ipv4": "The :attribute must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute must be a valid IPv6 address.",
  "validation.json": "The :attribute must be a valid JSON string.",
  "validation.lowercase": "The :attribute must be lowercase.",
  "validation.lt.array": "The :attribute must have less than :value items.",
  "validation.lt.file": "The :attribute must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute must be less than :value.",
  "validation.lt.string": "The :attribute must be less than :value characters.",
  "validation.lte.array": "The :attribute must not have more than :value items.",
  "validation.lte.file": "The :attribute must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute must be less than or equal to :value.",
  "validation.lte.string": "The :attribute must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute must be a valid MAC address.",
  "validation.max.array": "The :attribute must not have more than :max items.",
  "validation.max.file": "The :attribute must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute must not be greater than :max.",
  "validation.max.string": "The :attribute must not be greater than :max characters.",
  "validation.max_digits": "The :attribute must not have more than :max digits.",
  "validation.mimes": "The :attribute must be a file of type: :values.",
  "validation.mimetypes": "The :attribute must be a file of type: :values.",
  "validation.min.array": "The :attribute must have at least :min items.",
  "validation.min.file": "The :attribute must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute must be at least :min.",
  "validation.min.string": "The :attribute must be at least :min characters.",
  "validation.min_digits": "The :attribute must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute format is invalid.",
  "validation.numeric": "The :attribute must be a number.",
  "validation.password.letters": "The :attribute must contain at least one letter.",
  "validation.password.mixed": "The :attribute must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute must contain at least one number.",
  "validation.password.symbols": "The :attribute must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute and :other must match.",
  "validation.size.array": "The :attribute must contain :size items.",
  "validation.size.file": "The :attribute must be :size kilobytes.",
  "validation.size.numeric": "The :attribute must be :size.",
  "validation.size.string": "The :attribute must be :size characters.",
  "validation.starts_with": "The :attribute must start with one of the following: :values.",
  "validation.string": "The :attribute must be a string.",
  "validation.timezone": "The :attribute must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute must be uppercase.",
  "validation.url": "The :attribute must be a valid URL.",
  "validation.ulid": "The :attribute must be a valid ULID.",
  "validation.uuid": "The :attribute must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message",
  "words.my_drive_school": "我的驾校",
  "words.home": "首页",
  "words.welcome": "欢迎",
  "words.choose_locale": "选择语言",
  "words.profile_photo": "个人照片",
  "words.upload": "上传",
  "words.uploaded": "已上传",
  "words.activate_notifications": "激活通知",
  "words.delete_account": "删除帐户",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_before_deleting_your_account_please_download_any_data_or_information_that_you_wish_to_retain": "一旦您的帐户被删除，所有资源和数据都将被永久删除。在删除您的帐户之前，请下载您希望保留的任何数据或信息。",
  "words.are_you_sure_you_want_to_delete_your_account": "您确定要删除您的帐户吗？",
  "words.once_your_account_is_deleted_all_of_its_resources_and_data_will_be_permanently_deleted_please_enter_your_password_to_confirm_you_would_like_to_permanently_delete_your_account": "一旦您的帐户被删除，所有资源和数据都将被永久删除。请输入您的密码以确认您要永久删除您的帐户。",
  "words.save": "保存",
  "words.saved": "已保存",
  "words.cancel": "取消",
  "words.firstname": "名字",
  "words.lastname": "姓氏",
  "words.username": "用户名",
  "words.gender": "性别",
  "words.male": "男性",
  "words.female": "女性",
  "words.email": "电子邮件",
  "words.your_email_address_is_unverified": "您的电子邮件地址未经验证。",
  "words.click_here_to_re_send_the_verification_email": "点击此处重新发送验证电子邮件。",
  "words.a_new_verification_link_has_been_sent_to_your_email_address": "已向您的电子邮件地址发送了新的验证链接。",
  "words.password": "密码",
  "words.update_password": "更新密码",
  "words.current_password": "当前密码",
  "words.new_password": "新密码",
  "words.confirm": "确认",
  "words.confirm_password": "确认密码",
  "words.ensure_your_account_is_using_a_long_random_password_to_stay_secure": "确保您的帐户使用长且随机的密码以保持安全。",
  "words.profile_information": "个人资料信息",
  "words.update_your_account_profile_information_and_email_address": "更新您的帐户个人资料信息和电子邮件地址",
  "words.appointment_requests": "预约请求",
  "words.requester": "请求者",
  "words.at": "在",
  "words.appointments": "预约",
  "words.available_appointments": "可用预约",
  "words.admin_dashboard": "管理员仪表盘",
  "words.settings": "设置",
  "words.this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing": "这是应用程序的安全区域。请在继续之前确认您的密码。",
  "words.forgot_your_password_no_problem_just_let_us_know_your_email_address_and_we_will_email_you_a_password_reset_link_that_will_allow_you_to_choose_a_new_one": "忘记了您的密码？没问题。只需告诉我们您的电子邮件地址，我们将发送一封包含密码重置链接的电子邮件，允许您选择新密码。",
  "words.email_username": "电子邮件 / 用户名",
  "words.email_password_reset_link": "电子邮件密码重置链接",
  "words.register": "注册",
  "words.login": "登录",
  "words.logout": "注销",
  "words.remember_me": "记住我",
  "words.forgot_your_password": "忘记密码？",
  "words.reset_password": "重置密码",
  "words.thanks_for_signing_up_before_getting_started_could_you_verify_your_email_address_by_clicking_on_the_link_we_just_emailed_to_you_If_you_didnt_receive_the_email_we_will_gladly_send_you_another": "感谢您注册！在开始之前，您可以通过点击我们刚刚发送给您的链接来验证您的电子邮件地址吗？如果您没有收到该电子邮件，我们将很乐意再次发送给您。",
  "words.a_new_verification_link_has_been_sent_to_the_email_address_you_provided_during_registration": "已向您在注册期间提供的电子邮件地址发送了新的验证链接",
  "words.resend_verification_email": "重新发送验证电子邮件",
  "words.business_hours": "营业时间",
  "words.profile": "个人资料",
  "words.quiz": "测验",
  "words.my_data": "我的数据",
  "words.my_appointments": "我的预约",
  "words.previous_appointments": "以前的预约",
  "words.upcoming_appointments": "即将到来的预约",
  "words.there_are_no_upcoming_appointments": "没有即将到来的预约",
  "words.there_are_no_previous_appointments": "没有以前的预约",
  "words.navigation": "导航",
  "words.pending": "待处理",
  "words.approved": "已批准",
  "words.cancelled": "已取消",
  "words.declined": "已拒绝",
  "words.address": "地址",
  "words.notes": "备注",
  "words.update_appointment": "更新预约",
  "words.cancel_appointment": "取消预约",
  "words.approve_appointment": "批准预约",
  "words.decline_appointment": "拒绝预约",
  "words.delete_appointment": "删除预约",
  "words.appointment_confirmed": "预约已确认",
  "words.loading": "加载中"
};
const __vite_glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_zh
}, Symbol.toStringTag, { value: "Module" }));
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const app = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, "symbol" == typeof (o2 = function(t5, r3) {
      if ("object" != typeof t5 || null === t5)
        return t5;
      var n3 = t5[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var e3 = n3.call(t5, "string");
        if ("object" != typeof e3)
          return e3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t5);
    }(e2.key)) ? o2 : String(o2), e2);
  }
  var o2;
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t4) {
    return false;
  }
}
function u(t4, r2, n2) {
  return u = i() ? Reflect.construct.bind() : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, u.apply(null, arguments);
}
function f(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return f = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return u(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, f(t4);
}
var a = String.prototype.replace, c = /%20/g, l = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return a.call(t4, c, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, m = Array.isArray, g = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, m(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && m(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = g.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && m(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (m(f2))
    k2 = f2;
  else {
    var C2 = Object.keys(h2);
    k2 = a2 ? C2.sort(a2) : C2;
  }
  for (var T2 = 0; T2 < k2.length; ++T2) {
    var N2 = k2[T2], F2 = "object" == typeof N2 && void 0 !== N2.value ? N2.value : h2[N2];
    if (!i2 || null !== F2) {
      var D2 = m(h2) ? "function" == typeof e2 ? e2(n2, N2) : n2 : n2 + (c2 ? "." + N2 : "[" + N2 + "]");
      w(x2, t3(F2, D2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, C = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, T = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, N = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, F = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : N(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, D = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return C;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? C.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : C.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : C.arrayLimit, charset: void 0 === t5.charset ? C.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : C.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : C.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : C.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : C.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : C.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : C.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : C.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : C.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : C.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, C.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), C.decoder, u3, "key"), a3 = d.maybeMap(N(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, C.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = T(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = F(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, I = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(o2);
    if (u2) {
      for (var f2 in u2.groups)
        u2.groups[f2] = "string" == typeof u2.groups[f2] ? decodeURIComponent(u2.groups[f2]) : u2.groups[f2];
      return { params: u2.groups, query: D(i2) };
    }
    return false;
  }, n2.compile = function(t5) {
    var r2 = this, n3 = this.parameterSegments;
    return n3.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(e2, o2, i2) {
      var u2, f2, a2;
      if (!i2 && [null, void 0].includes(t5[o2]))
        throw new Error("Ziggy error: '" + o2 + "' parameter is required for route '" + r2.name + "'.");
      if (n3[n3.length - 1].name === o2 && ".*" === r2.wheres[o2])
        return encodeURIComponent(null != (a2 = t5[o2]) ? a2 : "").replace(/%2F/g, "/");
      if (r2.wheres[o2] && !new RegExp("^" + (i2 ? "(" + r2.wheres[o2] + ")?" : r2.wheres[o2]) + "$").test(null != (u2 = t5[o2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + o2 + "' parameter does not match required format '" + r2.wheres[o2] + "' for route '" + r2.name + "'.");
      return encodeURIComponent(null != (f2 = t5[o2]) ? f2 : "");
    }).replace(this.origin + "//", this.origin + "/").replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    return (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), P = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new I(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || m(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : m(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new I(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new I(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.m(r2), this.g(t5, r2));
  }, f2.m = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.g = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ f(String)), $ = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return void 0 === o2 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new P(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
const appName = ((_a = window.document.getElementsByTagName("title")[0]) == null ? void 0 : _a.innerText) || "Laravel";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.vue`,
    /* @__PURE__ */ Object.assign({ "./Pages/Admin/Dashboard.vue": () => import("./assets/Dashboard-4c7faeea.mjs"), "./Pages/Admin/Partials/Appointment.vue": () => import("./assets/Appointment-da054933.mjs"), "./Pages/Admin/Partials/AppointmentModal.vue": () => import("./assets/AppointmentModal-839a51f7.mjs").then((n2) => n2.A), "./Pages/Admin/Partials/AppointmentsGroup.vue": () => import("./assets/AppointmentsGroup-d679f2fa.mjs"), "./Pages/Appointments/Index.vue": () => import("./assets/Index-906ac64f.mjs"), "./Pages/Appointments/Partials/AvailableAppointment.vue": () => import("./assets/AvailableAppointment-f0151825.mjs"), "./Pages/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-58976f7f.mjs"), "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-96fb12c0.mjs"), "./Pages/Auth/Login.vue": () => import("./assets/Login-e647eff8.mjs"), "./Pages/Auth/Register.vue": () => import("./assets/Register-a2291237.mjs"), "./Pages/Auth/ResetPassword.vue": () => import("./assets/ResetPassword-7be849a8.mjs"), "./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-e392e529.mjs"), "./Pages/BusinessHour/Index.vue": () => import("./assets/Index-7f141ba3.mjs"), "./Pages/Home.vue": () => import("./assets/Home-c551f74a.mjs"), "./Pages/Profile/Edit.vue": () => import("./assets/Edit-446f2bb2.mjs"), "./Pages/Profile/Partials/DeleteUserForm.vue": () => import("./assets/DeleteUserForm-0636c234.mjs"), "./Pages/Profile/Partials/UpdatePasswordForm.vue": () => import("./assets/UpdatePasswordForm-2bb9897a.mjs"), "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": () => import("./assets/UpdateProfileInformationForm-47e92260.mjs"), "./Pages/Questions/Index.vue": () => import("./assets/Index-df147c0c.mjs"), "./Pages/Quiz/Admin.vue": () => import("./assets/Admin-5230b0c8.mjs"), "./Pages/Quiz/Client.vue": () => import("./assets/Client-c65b921d.mjs"), "./Pages/Quiz/Partials/Questions.vue": () => import("./assets/Questions-e9219aa3.mjs"), "./Pages/Quiz/Partials/Quiz.vue": () => import("./assets/Quiz-39c4c040.mjs"), "./Pages/Quiz/Start.vue": () => import("./assets/Start-112a2439.mjs"), "./Pages/User/Index.vue": () => import("./assets/Index-961b7910.mjs"), "./Pages/User/Partials/Appointments.vue": () => import("./assets/Appointments-4a8d9f12.mjs") })
  ),
  setup({ el, App, props, plugin }) {
    const app2 = createApp({ render: () => h$1(App, props) }).use(plugin).use($, Ziggy).use(i18nVue, {
      lang: "de",
      resolve: (lang) => {
        const langs = /* @__PURE__ */ Object.assign({ "../../lang/php_ar.json": __vite_glob_1_0, "../../lang/php_de.json": __vite_glob_1_1, "../../lang/php_en.json": __vite_glob_1_2, "../../lang/php_es.json": __vite_glob_1_3, "../../lang/php_fr.json": __vite_glob_1_4, "../../lang/php_hi.json": __vite_glob_1_5, "../../lang/php_it.json": __vite_glob_1_6, "../../lang/php_ja.json": __vite_glob_1_7, "../../lang/php_ru.json": __vite_glob_1_8, "../../lang/php_zh.json": __vite_glob_1_9 });
        return langs[`../../lang/${lang}.json`].default;
      },
      fallbackLang: "en"
    });
    app2.config.globalProperties.trans = trans;
    app2.mount(el);
  },
  progress: {
    color: "#4B5563"
  }
});
