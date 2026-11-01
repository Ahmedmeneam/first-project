/**
 * Dashboard dictionary (Arabic -> English).
 * The Arabic source string is used as the translation key, so a missing entry
 * simply falls back to the original Arabic text.
 */
const dashboard: Record<string, string> = {
  // Admin dashboard - header & guide
  'لوحة التحكم': 'Dashboard',
  'مرحباً بك، {name} • مركز المتابعة الرقابية والتشغيلية لنظام إدارة العهد والمخازن':
    'Welcome, {name} • Control & Operations Monitoring Center for the Custody & Warehouse Management System',
  'إظهار دليل البدء التوجيهي': 'Show the getting-started guide',

  // Admin dashboard - metric cards
  'العهد النشطة': 'Active custodies',
  'انقر لاستعراض العهد': 'Click to browse custodies',
  'الحسابات المسكنة': 'Provisioned accounts',
  'أمناء عهد ورؤساء أقسام': 'Storekeepers and department heads',
  'الأصناف المركزية': 'Central items',
  'في كتالوج الشركة الموحد': 'In the unified company catalog',
  'إجمالي المخازن': 'Total warehouses',
  'رئيسية وفرعية وعامة': 'Main, sub and general',

  // Admin dashboard - shortcuts
  'إدارة العهد والمخازن': 'Custody & Warehouse Management',
  'إنشاء وتسكين المخازن الرئيسية': 'Create and provision main warehouses',
  'إدارة الحسابات والأمان': 'Accounts & Security Management',
  'إنشاء الموظفين وبطاقات الـ 120 ثانية': 'Create staff and 120-second access cards',
  'إدارة الأصناف': 'Item Management',
  'استعراض أصناف العهد وإسنادها': 'Browse custody items and assign them',

  // Admin dashboard - recent movements
  'أحدث الحركات المخزنية المسجلة': 'Latest recorded warehouse movements',
  'متابعة فورية للوارد، الخصم، والتحويل الداخلي عبر مختلف العهد':
    'Real-time tracking of inbound, deductions and internal transfers across custodies',
  'سجل الحركات الكامل': 'Full movements log',
  'لم تسجل أي حركة مخزنية بعد (نظام نظيف فارغ بالكامل).':
    'No warehouse movement has been recorded yet (a completely clean, empty system).',
  'رقم الحركة': 'Movement No.',
  'نوع الحركة': 'Movement type',
  'الصنف': 'Item',
  'العهدة': 'Custody',
  'الكمية': 'Quantity',
  'حالة العملية': 'Operation status',
  'التاريخ': 'Date',

  // Movement types
  'إضافة (وارد)': 'Inbound (addition)',
  'خصم': 'Deduction',
  'تحويل داخلي': 'Internal transfer',
  'خروج نهائي': 'Final disposal',

  // Movement statuses
  'منفذة': 'Executed',
  'معلقة للاعتماد': 'Pending approval',
  'مرفوضة': 'Rejected',

  // Custody dashboard - header
  'مكتب رئيس القسم الرقابي': 'Supervisory Department Head Office',
  'مكتب أمين العهدة الميداني': 'Field Storekeeper Office',
  'العهدة غير مسكنة بعد': 'Custody not yet provisioned',
  'متابعة واعتماد طلبات الخصم، مراقبة التفويض، واعتماد محاضر الجرد والتسويات':
    'Review and approve deduction requests, monitor delegation, and approve inventory count minutes and adjustments',
  'تسجيل الوارد الخارجي بالمخزن الرئيسي، تنفيذ التحويلات الداخلية، والخصم المباشر أو رفع الطلبات':
    'Record external inbound at the main warehouse, execute internal transfers, and make direct deductions or submit requests',
  'العمليات المخزنية': 'Warehouse Operations',

  // Custody dashboard - metric cards
  'المخزن الرئيسي': 'Main warehouse',
  'المخزن الرئيسي للعهدة': 'Custody main warehouse',
  'حصر استقبال الوارد الخارجي': 'Receives external inbound exclusively',
  'الأصناف المسندة': 'Assigned items',
  'أصناف معتمدة في العهدة': 'Items approved in the custody',
  'الطلبات المعلقة': 'Pending requests',
  'بانتظار قرار رئيس القسم': 'Awaiting the department head decision',
  'سقوف التفويض اليومية': 'Daily delegation limits',
  'محسوبة لحظياً': 'Calculated in real time',
  'من حركات اليوم الفعلي': 'From the actual movements recorded today',

  // Custody dashboard - guidance callout
  'توجيهات العمل المعتمدة في الإصدار 6.7:': 'Operating guidelines approved in release 6.7:',
  'الوارد الخارجي (الإضافة):': 'External inbound (addition):',
  'يسجل حصرياً في المخزن الرئيسي للعهدة، ويتم توزيعه للمخازن الفرعية عبر التحويل الداخلي.':
    'Recorded exclusively in the custody main warehouse, and distributed to sub-warehouses via internal transfer.',
  'الخصم المفوض:': 'Delegated deduction:',
  'يتم تنفيذه فوراً إذا كان الصنف مفوضاً وضمن حد وسقف اليوم المحسوب ديناميكياً.':
    'Executed immediately if the item is delegated and within the daily limit and ceiling calculated dynamically.',
  'الطلبات المعلقة:': 'Pending requests:',
  'أي كمية تتجاوز السقف يتم حجز رصيدها فوراً في حقل الرصيد المحجوز لحين اعتماد رئيس القسم.':
    'Any quantity exceeding the ceiling has its balance reserved immediately in the reserved balance field until the department head approves it.',

  // Getting started guide - status badges
  'مكتملة': 'Completed',
  'جاهزة للبدء': 'Ready to start',
  'غير مكتملة (بانتظار سابقتها)': 'Incomplete (awaiting the previous step)',

  // Getting started guide - steps
  'الخطوة 1: إنشاء العهدة وتأسيس المخزن الرئيسي':
    'Step 1: Create the custody and set up the main warehouse',
  'إنشاء أول عهدة محاسبية للشركة، حيث ينشئ النظام تلقائياً قسمها الرقابي ومخزنها الرئيسي الحصري لاستقبال الوارد.':
    'Create the first accounting custody for the company; the system automatically creates its supervisory department and its exclusive main warehouse for receiving inbound.',
  'إنشاء عهدة جديدة': 'Create new custody',
  'الخطوة 2: إنشاء حسابات الموظفين وتسكينهم': 'Step 2: Create and provision staff accounts',
  'تسكين أمين العهدة الميداني ورئيس القسم الرقابي، مع توليد بيانات الدخول المؤقتة بمؤقت الـ 120 ثانية.':
    'Provision the field storekeeper and the supervisory department head, and generate temporary login credentials with the 120-second timer.',
  'إدارة وتسكين الحسابات': 'Manage and provision accounts',
  'الخطوة 3: تعريف وحدات القياس والأصناف المركزية':
    'Step 3: Define units of measure and central items',
  'إدخال دليل الوحدات وتوصيف الأصناف المركزية في كتالوج الشركة، ثم ربط الأصناف بالعهدة لتفعيل الحركات.':
    'Enter the units directory and define central items in the company catalog, then link items to the custody to enable movements.',
  'إدارة وتعريف الأصناف': 'Manage and define items',

  // Getting started guide - banner & actions
  'دليل البدء التوجيهي لتأسيس النظام': 'Getting-started guide for system setup',
  'النظام يبدأ نظيفاً وخالياً تماماً (Clean Slate). اتبع التسلسل الإلزامي لتشغيل أول عهدة:':
    'The system starts completely clean and empty (Clean Slate). Follow the mandatory sequence to run the first custody:',
  'اكتملت الخطوات التأسيسية!': 'Setup steps completed!',
  'إغلاق وإخفاء دليل البدء التوجيهي': 'Close and hide the getting-started guide',
  'إغلاق دليل البدء التوجيهي': 'Close the getting-started guide',
};

export default dashboard;
