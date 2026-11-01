/**
 * Authentication / onboarding dictionary (Arabic -> English).
 *
 * The Arabic string is used as the translation key so that any missing entry
 * simply falls back to the original Arabic text.
 */
const auth: Record<string, string> = {
  // ---------------------------------------------------------------------------
  // Login page
  // ---------------------------------------------------------------------------
  'إدارة العهد والمخازن': 'Custody & Warehouse Management',
  'التحويل للوضع النهاري (فاتح)': 'Switch to light (day) mode',
  'التحويل للوضع الليلي (داكن)': 'Switch to dark (night) mode',
  'تبديل المظهر': 'Toggle appearance',
  'تسجيل الدخول للنظام': 'Sign in to the system',
  'أدخل كود المستخدم وكلمة المرور الخاصة بك': 'Enter your user code and password',
  'فشل تسجيل الدخول': 'Sign-in failed',
  'حدث خطأ أثناء تسجيل الدخول': 'An error occurred while signing in',
  'كلمة المرور لا تستوفي الشروط': 'The password does not meet the requirements',
  'كلمتا المرور غير متطابقتين': 'The passwords do not match',
  'يرجى إدخال الاسم ثلاثياً': 'Please enter your full triple name',
  'فشل حفظ كلمة المرور الجديدة': 'Failed to save the new password',
  'حدث خطأ أثناء تحديث الحساب': 'An error occurred while updating the account',
  'كود المستخدم': 'User code',
  'ADM-001 أو EMP-001': 'ADM-001 or EMP-001',
  'أدمن: ADM-': 'Admin: ADM-',
  'رئيس قسم: MGR-': 'Dept. head: MGR-',
  'أمين عهدة: EMP-': 'Storekeeper: EMP-',
  'كلمة المرور': 'Password',
  'جارٍ التحقق...': 'Verifying...',
  'دخول النظام': 'Sign in',
  '* يدعم التنقل السريع بلوحة المفاتيح عبر زر Tab للتبديل و Enter للتنفيذ.':
    '* Fast keyboard navigation is supported: Tab to move between fields and Enter to submit.',
  'تفعيل الحساب وتعيين كلمة المرور': 'Activate account and set password',
  'كود المستخدم:': 'User code:',
  'تم الدخول بكلمة مرور مؤقتة. يجب عليك الآن تعيين كلمة مرور شخصية قوية وإكمال بياناتك الشخصية لتفعيل الحساب نهائياً.':
    'You signed in with a temporary password. You must now set a strong personal password and complete your personal details to fully activate the account.',
  'الاسم ثلاثياً المعتمد *': 'Approved full triple name *',
  'رقم الهاتف الشخصي': 'Personal phone number',
  'كلمة المرور الشخصية الجديدة *': 'New personal password *',
  '8 خانات على الأقل تشمل حرفاً ورقماً ورمزاً':
    'At least 8 characters including a letter, a number and a symbol',
  'تأكيد كلمة المرور الجديدة *': 'Confirm the new password *',
  'إعادة إدخال كلمة المرور': 'Re-enter the password',
  'جارٍ التفعيل...': 'Activating...',
  'حفظ وتفعيل الحساب': 'Save and activate account',
  'إلغاء': 'Cancel',

  // ---------------------------------------------------------------------------
  // Setup wizard
  // ---------------------------------------------------------------------------
  'نظام إدارة العهد والمخازن': 'Custody & Warehouse Management System',
  'فشلت عملية تهيئة النظام': 'System initialization failed',
  'حدث خطأ أثناء حفظ الإعدادات': 'An error occurred while saving the settings',
  'معالج التهيئة الأولي لنظام العهد والمخازن':
    'Initial setup wizard for the custody & warehouse system',
  'الإصدار 6.7 المعتمد • البدء النظيف وقفل المعالج لمرة واحدة حصرية':
    'Approved release 6.7 • Clean start and a one-time exclusive wizard lock',
  'الانتقال لشاشة تسجيل الدخول': 'Go to the sign-in screen',
  '1. بيانات المنشأة التأسيسية': '1. Founding organization details',
  'اسم المنشأة أو الشركة المعتمد *': 'Approved organization / company name *',
  'مثال: شركة الصناعات الهندسية المتطورة':
    'Example: Advanced Engineering Industries Co.',
  '2. حساب مسؤول النظام الأول (الأدمن)':
    '2. First system administrator account (admin)',
  'الكود المخصص: ADM-001': 'Reserved code: ADM-001',
  'اسم المسؤول ثلاثياً *': 'Administrator full triple name *',
  'مثال: أحمد عبد الرحمن حسن': 'Example: Ahmed Abdel Rahman Hassan',
  'البريد الإلكتروني (اختياري)': 'Email address (optional)',
  'كلمة المرور القوية *': 'Strong password *',
  'تأكيد كلمة المرور *': 'Confirm password *',
  'شروط كلمة المرور المؤسسية:': 'Enterprise password requirements:',
  '8 خانات على الأقل': 'At least 8 characters',
  'حرف كبير (A-Z)': 'Uppercase letter (A-Z)',
  'حرف صغير (a-z)': 'Lowercase letter (a-z)',
  'رقم (0-9)': 'Digit (0-9)',
  'رمز خاص (!@#$%^&*...)': 'Special character (!@#$%^&*...)',
  'جارٍ تهيئة وتأمين النظام...': 'Initializing and securing the system...',
  'إتمام التهيئة وبدء تشغيل النظام': 'Complete setup and start the system',
  '* يُقفل هذا المعالج نهائياً بعد الحفظ لضمان سلامة وأمان النظام':
    '* This wizard is permanently locked after saving to keep the system safe and secure',

  // ---------------------------------------------------------------------------
  // Temporary credential handover modal
  // ---------------------------------------------------------------------------
  'تسليم بيانات الاعتماد المؤقتة': 'Handover of temporary credentials',
  'بيانات سرية تُعرض لمرة واحدة حصرية في المتصفح':
    'Confidential data shown only once in the browser',
  'الموظف:': 'Employee:',
  'الدور:': 'Role:',
  'رئيس قسم': 'Department head',
  'أمين عهدة': 'Storekeeper',
  'كود المستخدم (اسم الدخول)': 'User code (login name)',
  'نسخ الكود': 'Copy code',
  'تم': 'Done',
  'نسخ': 'Copy',
  'كلمة المرور المؤقتة': 'Temporary password',
  'نسخ كلمة المرور': 'Copy password',
  'قاعدة الأمان:': 'Security rule:',
  'تُحفظ كلمة المرور كـ Hash مشفر فقط في الخادم، ولن يتم كشفها ثانية بعد إغلاق هذه النافذة أو انقضاء الـ 120 ثانية. عند انتهاء المهلة دون تسليمها، استخدم إجراء':
    'The password is stored on the server only as an encrypted hash and will never be revealed again after this window is closed or the 120 seconds expire. If the time limit ends before handover, use the action',
  '«إعادة إصدار كلمة مرور مؤقتة»': '“Reissue temporary password”',
  'من جدول المستخدمين.': 'from the users table.',
  'طباعة بطاقة التسليم الرسمية': 'Print the official handover card',
  'إنهاء وإغلاق فوري': 'Finish and close immediately',
  'بطاقة تسليم بيانات الدخول المؤقتة':
    'Temporary login credentials handover card',
  'نظام إدارة العهد والمخازن - الإصدار 6.7':
    'Custody & Warehouse Management System - Release 6.7',
  'اسم الموظف:': 'Employee name:',
  'الدور الوظيفي:': 'Job role:',
  'العهدة المسكن عليها:': 'Assigned custody:',
  'كلمة المرور المؤقتة:': 'Temporary password:',
  '* تنبيه: كلمة المرور المؤقتة صالحة للاستخدام لمرة واحدة فقط. سيطالبك النظام فور تسجيل الدخول الأول بتعيين كلمة مرور شخصية قوية وإكمال بيانات الاتصال.':
    '* Note: the temporary password is valid for one use only. Immediately after the first sign-in the system will require you to set a strong personal password and complete your contact details.',
  'توقيع مسؤول النظام: __________________':
    'System administrator signature: __________________',
  'توقيع المستلم: __________________': 'Recipient signature: __________________',

  // ---------------------------------------------------------------------------
  // Idle lock modal
  // ---------------------------------------------------------------------------
  'يرجى إدخال كلمة المرور لفك القفل': 'Please enter the password to unlock',
  'كلمة المرور غير صحيحة': 'Incorrect password',
  'فشل فك قفل الشاشة': 'Failed to unlock the screen',
  'تم قفل الشاشة لعدم النشاط': 'Screen locked due to inactivity',
  'شاشة القفل الأمني': 'Security lock screen',
  'مضى 30 دقيقة من انعدام النشاط. حفاظاً على سرية البيانات المخزنية، يرجى إعادة إدخال كلمة المرور للعودة لجلستك.':
    '30 minutes have passed with no activity. To keep warehouse data confidential, please re-enter your password to return to your session.',
  'تم قفل الشاشة مؤقتاً لحماية مساحة العمل. أدخل كلمة المرور لاستئناف العمل.':
    'The screen has been locked temporarily to protect the workspace. Enter your password to resume work.',
  'مسؤول النظام': 'System administrator',
  'كلمة المرور الحالية': 'Current password',
  'أدخل كلمة المرور الخاصة بك...': 'Enter your password...',
  'إخفاء كلمة المرور': 'Hide password',
  'إظهار كلمة المرور': 'Show password',
  'فك قفل الشاشة والمتابعة': 'Unlock the screen and continue',
  'تسجيل الخروج والتبديل لحساب آخر': 'Sign out and switch to another account',

  // ---------------------------------------------------------------------------
  // Factory reset modal
  // ---------------------------------------------------------------------------
  'فشلت عملية إعادة ضبط المصنع': 'Factory reset failed',
  'حدث خطأ أثناء تصفير النظام': 'An error occurred while resetting the system',
  'إعادة ضبط المصنع الآمنة (مسؤول النظام فقط)':
    'Secure factory reset (system administrator only)',
  'إغلاق النافذة': 'Close the window',
  'تصفير شامل وإعادة النظام للحالة النظيفة الأصلية 100% (Clean Slate) لشركة جديدة':
    'Full wipe and return of the system to its original 100% clean state (Clean Slate) for a new company',
  'تحذير أمني مؤكد ومحمي:': 'Confirmed and protected security warning:',
  'سيتم حذف كافة السجلات والبيانات المسجلة لشركة {company} بشكل دائم ولا يمكن التراجع عنه (المستخدمين، العهد، المخازن، الأصناف، سجل الحركات، وقواعد التفويض).':
    'All records and data registered for company {company} will be permanently deleted with no possibility of rollback (users, custodies, warehouses, items, movement log and delegation rules).',
  'لحماية المنشأة من الأخطاء العرضية، لا يمكن تفعيل هذا الإجراء إلا بعد مطابقة كلمة مرور الأدمن الحالية وكتابة عبارة التأكيد يدوياً.':
    'To protect the organization from accidental mistakes, this action can only be enabled after matching the current admin password and typing the confirmation phrase manually.',
  '1. أدخل كلمة مرور مسؤول النظام الحالية (ADM-001) للتأكيد الأمني *':
    '1. Enter the current system administrator password (ADM-001) for security confirmation *',
  'كلمة مرور حساب مسؤول النظام الحالي':
    'Current system administrator account password',
  '2. اكتب عبارة التأكيد الأمنية التالية بالحرف لتأكيد الرغبة *':
    '2. Type the following security confirmation phrase exactly to confirm your intent *',
  'اكتب العبارة كاملة يدوياً هنا': 'Type the full phrase manually here',
  'أقر بمسؤوليتي الإدارية الكاملة كمسؤول للنظام عن حذف كافة بيانات المنشأة وقواعد البيانات والعمليات، وأعلم أنه لا يمكن استرجاعها بعد هذا الإجراء.':
    'I acknowledge my full administrative responsibility as system administrator for deleting all organization data, databases and operations, and I understand that they cannot be recovered after this action.',
  'إلغاء الأمر': 'Cancel the action',
  'جارٍ مسح وتصفير النظام...': 'Wiping and resetting the system...',
  'تنفيذ إعادة ضبط المصنع ومسح النظام':
    'Execute the factory reset and wipe the system',
};

export default auth;
