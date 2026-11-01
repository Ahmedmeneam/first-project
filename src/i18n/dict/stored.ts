/**
 * Text that the server writes into the database in canonical Arabic
 * (seeded units, auto-generated warehouse names, movement notes and
 * notifications). It is translated when it is read back: exact entries for
 * fixed text and `{placeholder}` templates for text with filled-in values
 * (see getStoredTemplates in ../translate.ts).
 */
const stored: Record<string, string> = {
  // ---- seeded units of measure ----
  'قطعة': 'Piece',
  'كرتونة': 'Carton',
  'كيلو جرام': 'Kilogram',
  'جرام': 'Gram',
  'طن': 'Ton',
  'متر': 'Meter',
  'متر مربع': 'Square meter',
  'متر مكعب': 'Cubic meter',
  'لتر': 'Liter',
  'ملليلتر': 'Milliliter',
  'علبة': 'Box',
  'لفة / رول': 'Roll',
  'برميل': 'Barrel',
  'شيكارة / كيس': 'Sack / Bag',
  'لوح': 'Plank',
  'دستة': 'Dozen',
  'زوج': 'Pair',
  'حزمة': 'Bundle',
  'طقم': 'Set',
  'عبوة': 'Pack',

  // ---- fixed labels inside generated notes ----
  'زيادة': 'surplus',
  'عجز': 'shortage',
  'أمين العهدة': 'Custodian',

  // ---- auto-generated warehouse / movement notes ----
  'المخزن الرئيسي لعهدة {name}': 'Main warehouse of custody {name}',
  'رصيد افتتاحي عبر الاستيراد التأسيسي للعهدة': "Opening balance via the custody's foundational import",
  'تسوية جردية ({kind}) لمحضر الجرد #{id}. {notes}': 'Inventory adjustment ({kind}) for inventory report #{id}. {notes}',
  'إقفال كمي رسمي للسنة المالية {year}': 'Official quantity closing for fiscal year {year}',
  'تم العكس بالحركة {trx} للسبب: {reason}': 'Reversed by movement {trx} for the reason: {reason}',
  'حركة عكسية للحركة [{trx}]. السبب: {reason}': 'Reversal movement of movement [{trx}]. Reason: {reason}',

  // ---- notification titles ----
  'بدء جلسة جرد وتجميد المخزن': 'Inventory session started and warehouse frozen',
  'مقترح صنف جديد بانتظار الاعتماد': 'New item proposal awaiting approval',
  'تمت الموافقة على مقترح الصنف': 'Item proposal approved',
  'تم رفض مقترح الصنف': 'Item proposal rejected',
  'وارد خارجي معلق بانتظار موافقة رئيس القسم': 'External receipt pending department head approval',
  'طلب وارد خارجي جديد بانتظار الاعتماد': 'New external receipt request awaiting approval',
  'طلب خصم مخزني جديد بانتظار الاعتماد': 'New warehouse deduction request awaiting approval',
  'تحويل داخلي معلق بانتظار موافقة رئيس القسم': 'Internal transfer pending department head approval',
  'طلب تحويل داخلي جديد بانتظار الاعتماد': 'New internal transfer request awaiting approval',
  'طلب خروج نهائي (إتلاف/تكهين)': 'Final disposal request (destruction/scrapping)',
  'طلب خروج نهائي (إتلاف/تكهين) جديد': 'New final disposal request (destruction/scrapping)',
  'تمت الموافقة على طلبك ({trx})': 'Your request ({trx}) was approved',
  'تم رفض طلبك ({trx})': 'Your request ({trx}) was rejected',

  // ---- notification messages ----
  'بدأ رئيس القسم جلسة جرد للمخزن ({wh}) وتم تجميد عملياته، يرجى إدخال أرقام العد الفعلي للأصناف.':
    'The department head started an inventory session for warehouse ({wh}) and froze its operations. Please enter the actual item counts.',
  'قام أمين العهدة ({user}) باقتراح صنف جديد: ({name}) بانتظار مراجعتك واعتماده.':
    'Custodian ({user}) proposed a new item: ({name}), awaiting your review and approval.',
  'وافق رئيس القسم على مقترح الصنف ({name}) وتم إدراجه بالكود ({code}).':
    'The department head approved the item proposal ({name}) and it was added with code ({code}).',
  'رفض رئيس القسم مقترح الصنف ({name}). السبب: {reason}':
    'The department head rejected the item proposal ({name}). Reason: {reason}',
  'قام أمين العهدة ({user}) بتسجيل وارد خارجي للصنف ({item}) بكمية {qty} بالمخزن الرئيسي. يتطلب موافقتك.':
    'Custodian ({user}) registered an external receipt of item ({item}), quantity {qty}, in the main warehouse. Your approval is required.',
  'قام أمين العهدة ({user}) برفع طلب خصم للصنف ({item}) بكمية {qty} من مخزن ({wh}). يتطلب موافقتك وحجزت الكمية.':
    'Custodian ({user}) submitted a deduction request for item ({item}), quantity {qty}, from warehouse ({wh}). Your approval is required and the quantity has been reserved.',
  'قام أمين العهدة ({user}) بطلب تحويل داخلي للصنف ({item}) بكمية {qty} من ({from}) إلى ({to}).':
    'Custodian ({user}) requested an internal transfer of item ({item}), quantity {qty}, from ({from}) to ({to}).',
  'قام أمين العهدة ({user}) برفع طلب خروج نهائي للصنف ({item}) بكمية {qty} من مخزن ({wh}). يتطلب موافقتك وحجزت الكمية.':
    'Custodian ({user}) submitted a final disposal request for item ({item}), quantity {qty}, from warehouse ({wh}). Your approval is required and the quantity has been reserved.',
  'وافق رئيس القسم على المعاملة ({trx}) وتم تحديث الأرصدة المخزنية بنجاح.':
    'The department head approved transaction ({trx}) and warehouse balances were updated successfully.',
  'رفض رئيس القسم المعاملة ({trx}). سبب الرفض: {reason}':
    'The department head rejected transaction ({trx}). Rejection reason: {reason}',
};

/**
 * Short unit symbols. Kept apart from the main dictionary because some symbols
 * (e.g. "م") are also used as ordinary words elsewhere in the UI, and are only
 * ever applied to fields that hold a unit symbol.
 */
export const unitSymbolsEnglish: Record<string, string> = {
  'ق': 'pcs',
  'كرتونة': 'ctn',
  'كجم': 'kg',
  'جم': 'g',
  'طن': 't',
  'م': 'm',
  'م²': 'm²',
  'م³': 'm³',
  'لتر': 'L',
  'مل': 'mL',
  'علبة': 'box',
  'لفة': 'roll',
  'برميل': 'bbl',
  'شيكارة': 'sack',
  'لوح': 'plank',
  'دستة': 'doz',
  'زوج': 'pair',
  'حزمة': 'bdl',
  'طقم': 'set',
  'عبوة': 'pack',
};

export default stored;
