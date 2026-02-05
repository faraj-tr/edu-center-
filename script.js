/* ====================================
   SCRIPT.JS - ملف البرمجة الرئيسي
   مركز إبداع التعليمي
   ==================================== */

/* ====================================
   PROVINCES DATA - بيانات المحافظات
   نظام ديناميكي لعرض المحافظات حسب الدولة المختارة
   ==================================== */
const provinces = {
  'الأردن': [
    'عمان', 'إربد', 'الزرقاء', 'العقبة', 'المفرق', 'جرش', 'عجلون',
    'الكرك', 'معان', 'الطفيلة', 'مادبا', 'البلقاء'
  ],
  'السعودية': [
    'الرياض', 'مكة المكرمة', 'المدينة المنورة', 'الشرقية', 'عسير',
    'تبوك', 'القصيم', 'حائل', 'جازان', 'نجران', 'الباحة', 'الجوف', 'الحدود الشمالية'
  ],
  'الإمارات': [
    'أبوظبي', 'دبي', 'الشارقة', 'عجمان', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'
  ],
  'مصر': [
    'القاهرة', 'الجيزة', 'الإسكندرية', 'الدقهلية', 'البحيرة', 'الفيوم',
    'الغربية', 'الإسماعيلية', 'المنوفية', 'المنيا', 'القليوبية', 'الوادي الجديد',
    'الشرقية', 'أسيوط', 'سوهاج', 'قنا', 'أسوان', 'الأقصر', 'البحر الأحمر',
    'كفر الشيخ', 'مطروح', 'شمال سيناء', 'جنوب سيناء', 'بورسعيد', 'دمياط', 'السويس'
  ],
  'الكويت': [
    'العاصمة', 'حولي', 'الفروانية', 'مبارك الكبير', 'الأحمدي', 'الجهراء'
  ],
  'عمان': [
    'مسقط', 'ظفار', 'مسندم', 'البريمي', 'الداخلية', 'شمال الباطنة',
    'جنوب الباطنة', 'جنوب الشرقية', 'شمال الشرقية', 'الظاهرة', 'الوسطى'
  ],
  'قطر': [
    'الدوحة', 'الريان', 'أم صلال', 'الخور', 'الوكرة', 'الضعاين', 'الشمال', 'الشحانية'
  ],
  'البحرين': [
    'العاصمة', 'المحرق', 'الشمالية', 'الجنوبية'
  ],
  'سوريا': [
    'دمشق', 'ريف دمشق', 'حلب', 'حمص', 'حماة', 'اللاذقية', 'طرطوس',
    'إدلب', 'دير الزور', 'الرقة', 'درعا', 'السويداء', 'القنيطرة', 'الحسكة'
  ],
  'لبنان': [
    'بيروت', 'جبل لبنان', 'الشمال', 'البقاع', 'الجنوب', 'النبطية', 'عكار', 'بعلبك الهرمل'
  ],
  'فلسطين': [
    'القدس', 'رام الله والبيرة', 'الخليل', 'بيت لحم', 'أريحا والأغوار',
    'نابلس', 'جنين', 'طولكرم', 'قلقيلية', 'سلفيت', 'طوباس', 'غزة', 'خان يونس',
    'رفح', 'دير البلح', 'شمال غزة'
  ],
  'العراق': [
    'بغداد', 'البصرة', 'نينوى', 'أربيل', 'السليمانية', 'دهوك', 'الأنبار',
    'كركوك', 'ديالى', 'صلاح الدين', 'واسط', 'ميسان', 'ذي قار', 'القادسية',
    'بابل', 'كربلاء', 'النجف', 'المثنى', 'حلبجة'
  ],
  'اليمن': [
    'صنعاء', 'عدن', 'تعز', 'الحديدة', 'إب', 'ذمار', 'حضرموت', 'المحويت',
    'صعدة', 'عمران', 'لحج', 'أبين', 'شبوة', 'مأرب', 'الجوف', 'البيضاء',
    'ريمة', 'الضالع', 'المهرة', 'سقطرى', 'حجة', 'صنعاء (أمانة العاصمة)'
  ],
  'ليبيا': [
    'طرابلس', 'بنغازي', 'مصراتة', 'البيضاء', 'سبها', 'الزاوية', 'طبرق', 'الخمس', 'زليتن', 'درنة'
  ],
  'تونس': [
    'تونس', 'أريانة', 'بن عروس', 'منوبة', 'نابل', 'سوسة', 'المنستير', 'صفاقس',
    'القيروان', 'المهدية', 'قابس', 'مدنين', 'تطاوين', 'قفصة', 'توزر', 'قبلي',
    'الكاف', 'سليانة', 'باجة', 'جندوبة', 'بنزرت', 'زغوان', 'القصرين', 'سيدي بوزيد'
  ],
  'الجزائر': [
    'الجزائر', 'وهران', 'قسنطينة', 'عنابة', 'باتنة', 'سطيف', 'سيدي بلعباس',
    'بسكرة', 'تلمسان', 'بجاية', 'تيارت', 'جيجل', 'سعيدة', 'سكيكدة', 'تيسمسيلت'
  ],
  'المغرب': [
    'الدار البيضاء', 'الرباط', 'فاس', 'مراكش', 'طنجة', 'أكادير', 'مكناس',
    'وجدة', 'القنيطرة', 'تطوان', 'الصويرة', 'العيون'
  ],
  'السودان': [
    'الخرطوم', 'الجزيرة', 'كسلا', 'القضارف', 'البحر الأحمر', 'نهر النيل',
    'الشمالية', 'شمال كردفان', 'جنوب كردفان', 'شمال دارفور', 'غرب دارفور',
    'جنوب دارفور', 'شرق دارفور', 'وسط دارفور', 'النيل الأبيض', 'النيل الأزرق', 'سنار'
  ]
};

/* ====================================
   DOM ELEMENTS - عناصر الصفحة
   احتفظ بمراجع لجميع العناصر المستخدمة بشكل متكرر
   ==================================== */
const form = document.getElementById('eduForm');
const steps = document.querySelectorAll('.step');
const stepCircles = document.querySelectorAll('.step-circle');
const stepLabels = document.querySelectorAll('.step-label');
const progressBar = document.getElementById('progressBar');
const nextBtns = document.querySelectorAll('.btn-next');
const prevBtns = document.querySelectorAll('.btn-prev');
const thankyouPage = document.getElementById('thankyouPage');
const loadingOverlay = document.getElementById('loadingOverlay');
const confettiContainer = document.getElementById('confettiContainer');
const countrySelect = document.getElementById('country');
const provinceGroup = document.getElementById('provinceGroup');
const provinceSelect = document.getElementById('province');

/* ====================================
   GLOBAL VARIABLES - المتغيرات العامة
   ==================================== */
let currentStep = 1;
const totalSteps = 4;

/* ====================================
   VALIDATION FUNCTIONS - دوال التحقق من الصحة
   ==================================== */

/**
 * التحقق من صحة البريد الإلكتروني
 * @param {string} email - البريد الإلكتروني المراد التحقق منه
 * @returns {boolean} - true إذا كان البريد صحيح
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * التحقق من صحة رقم الهاتف
 * @param {string} phone - رقم الهاتف المراد التحقق منه
 * @returns {boolean} - true إذا كان الرقم صحيح (7-15 رقم)
 */
function isValidPhone(phone) {
  const phoneRegex = /^[0-9]{7,15}$/;
  return phoneRegex.test(phone);
}

/**
 * عرض رسالة خطأ مع تأثيرات بصرية
 * @param {string} inputId - معرّف حقل الإدخال
 * @param {string} errorId - معرّف رسالة الخطأ
 * @param {string} message - نص رسالة الخطأ
 * @returns {boolean} - دائماً false للإشارة للفشل
 */
function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  // إضافة تنسيق الخطأ
  input.classList.add('error');
  error.textContent = message;
  error.classList.add('show');

  // إزالة الخطأ تلقائياً عند التعديل
  input.addEventListener('input', function() {
    input.classList.remove('error');
    error.classList.remove('show');
  }, { once: true });

  return false;
}

/**
 * التحقق من صحة البيانات في خطوة معينة
 * @param {number} stepNum - رقم الخطوة المراد التحقق منها
 * @returns {boolean} - true إذا كانت جميع الحقول صحيحة
 */
function validateStep(stepNum) {
  let isValid = true;

  // التحقق من الخطوة 1: المعلومات الشخصية
  if (stepNum === 1) {
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    if (fullName.length < 3) {
      showError('fullName', 'fullNameError', 'يرجى إدخال الاسم الكامل (3 أحرف على الأقل)');
      isValid = false;
    }

    if (!isValidPhone(phone)) {
      showError('phone', 'phoneError', 'يرجى إدخال رقم هاتف صحيح (أرقام فقط، 7-15 رقم)');
      isValid = false;
    }

    if (!isValidEmail(email)) {
      showError('email', 'emailError', 'يرجى إدخال بريد إلكتروني صحيح');
      isValid = false;
    }
  }

  // التحقق من الخطوة 2: الموقع والجنسية
  if (stepNum === 2) {
    const nationality = document.getElementById('nationality').value;
    const country = document.getElementById('country').value;

    if (!nationality) {
      showError('nationality', 'nationalityError', 'يرجى اختيار الجنسية');
      isValid = false;
    }

    if (!country) {
      showError('country', 'countryError', 'يرجى اختيار بلد الإقامة');
      isValid = false;
    }

    // التحقق من المحافظة إذا كانت ظاهرة
    if (provinceGroup.style.display !== 'none') {
      const province = document.getElementById('province').value;
      if (!province) {
        showError('province', 'provinceError', 'يرجى اختيار المحافظة');
        isValid = false;
      }
    }
  }

  // التحقق من الخطوة 3: الهدف والمستوى
  if (stepNum === 3) {
    const goal = document.getElementById('goal').value;
    const level = document.getElementById('level').value;

    if (!goal) {
      showError('goal', 'goalError', 'يرجى اختيار الهدف');
      isValid = false;
    }

    if (!level) {
      showError('level', 'levelError', 'يرجى اختيار المستوى');
      isValid = false;
    }
  }

  // التحقق من الخطوة 4: التفاصيل والدفع
  if (stepNum === 4) {
    const days = document.getElementById('days').value;
    const time = document.getElementById('time').value;
    const courseType = document.getElementById('courseType').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const paymentPlan = document.getElementById('paymentPlan').value;

    if (!days) {
      showError('days', 'daysError', 'يرجى اختيار الأيام');
      isValid = false;
    }

    if (!time) {
      showError('time', 'timeError', 'يرجى اختيار الوقت');
      isValid = false;
    }

    if (!courseType) {
      showError('courseType', 'courseTypeError', 'يرجى اختيار نوع البرنامج');
      isValid = false;
    }

    if (!paymentMethod) {
      showError('paymentMethod', 'paymentMethodError', 'يرجى اختيار طريقة الدفع');
      isValid = false;
    }

    if (!paymentPlan) {
      showError('paymentPlan', 'paymentPlanError', 'يرجى اختيار نظام الدفع');
      isValid = false;
    }
  }

  return isValid;
}

/* ====================================
   STEP NAVIGATION - التنقل بين الخطوات
   ==================================== */

/**
 * تحديث واجهة المستخدم عند الانتقال لخطوة جديدة
 * @param {number} newStep - رقم الخطوة الجديدة
 */
function updateStep(newStep) {
  // إخفاء جميع الخطوات
  steps.forEach(step => step.classList.remove('active'));

  // إظهار الخطوة الحالية
  document.querySelector(`.step[data-step="${newStep}"]`).classList.add('active');

  // تحديث دوائر التقدم
  stepCircles.forEach((circle, index) => {
    const stepNum = index + 1;
    circle.classList.remove('active', 'completed');
    stepLabels[index].classList.remove('active');

    if (stepNum < newStep) {
      circle.classList.add('completed');
    } else if (stepNum === newStep) {
      circle.classList.add('active');
      stepLabels[index].classList.add('active');
    }
  });

  // تحديث شريط التقدم
  const progressPercent = (newStep / totalSteps) * 100;
  progressBar.style.width = progressPercent + '%';

  currentStep = newStep;

  // التمرير لأعلى بسلاسة (معطل حالياً للراحة)
  // window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ====================================
   EVENT LISTENERS - مستمعات الأحداث
   ==================================== */

// أزرار التالي
nextBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const nextStep = parseInt(btn.getAttribute('data-next'));

    // التحقق من صحة الحقول قبل المتابعة
    if (validateStep(currentStep)) {
      updateStep(nextStep);
    }
  });
});

// أزرار السابق
prevBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const prevStep = parseInt(btn.getAttribute('data-prev'));
    updateStep(prevStep);
  });
});

/* ====================================
   DYNAMIC PROVINCES - المحافظات الديناميكية
   ==================================== */

/**
 * تحديث قائمة المحافظات بناءً على الدولة المختارة
 */
countrySelect.addEventListener('change', function() {
  const selectedCountry = this.value;

  if (provinces[selectedCountry]) {
    // إظهار حقل المحافظة
    provinceGroup.style.display = 'block';
    provinceSelect.required = true;
    provinceSelect.innerHTML = '<option value="">اختر المحافظة</option>';

    // إضافة خيارات المحافظات
    provinces[selectedCountry].forEach(province => {
      const option = document.createElement('option');
      option.value = province;
      option.textContent = province;
      provinceSelect.appendChild(option);
    });
  } else {
    // إخفاء حقل المحافظة
    provinceGroup.style.display = 'none';
    provinceSelect.required = false;
    provinceSelect.value = '';
  }
});

/* ====================================
   CONFETTI EFFECT - تأثير المفرقعات الاحتفالية
   ==================================== */

/**
 * إنشاء تأثير احتفالي بالمفرقعات الملونة
 */
function createConfetti() {
  const colors = ['#E91E63', '#F9A825', '#0288D1', '#4CAF50', '#9C27B0', '#FF5722'];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = (Math.random() * 0.5) + 's';
    confetti.style.animation = 'confettiFall linear forwards';

    confettiContainer.appendChild(confetti);

    // إزالة المفرقعة بعد انتهاء الحركة
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

/* ====================================
   FORM SUBMISSION - إرسال النموذج
   ==================================== */

/**
 * معالجة إرسال النموذج إلى Google Apps Script
 */
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // التحقق من الحقول في الخطوة الأخيرة
  if (!validateStep(currentStep)) {
    return;
  }

  // إظهار شاشة التحميل
  loadingOverlay.classList.add('active');

  const formData = new FormData(form);

  try {
    // إرسال البيانات إلى Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxlHQ-MrShhcl-_DPXy_ZtRVgFvXxhL3XYeFf9xyJgJY-qxWEQCIKvt84eGamcyVRzZSQ/exec",
      {
        method: "POST",
        body: formData
      }
    );

    // إخفاء شاشة التحميل مع تأخير بسيط
    setTimeout(() => {
      loadingOverlay.classList.remove('active');

      // إخفاء النموذج وإظهار صفحة الشكر
      form.style.display = 'none';
      document.querySelector('.progress-container').style.display = 'none';
      thankyouPage.classList.add('active');

      // تشغيل تأثير المفرقعات الاحتفالية
      createConfetti();
    }, 800);

  } catch (error) {
    // معالجة الأخطاء
    loadingOverlay.classList.remove('active');
    alert("حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.");
    console.error('Error:', error);
  }
});

/* ====================================
   ERROR HANDLING - معالجة الأخطاء
   ==================================== */

/**
 * إزالة رسائل الخطأ تلقائياً عند الكتابة في أي حقل
 */
document.querySelectorAll('input, select').forEach(element => {
  element.addEventListener('input', function() {
    this.classList.remove('error');
    const errorElement = this.parentElement.querySelector('.error-message');
    if (errorElement) {
      errorElement.classList.remove('show');
    }
  });
});

/* ====================================
   INITIALIZATION - التهيئة الأولية
   ==================================== */

/**
 * كود يتم تنفيذه عند تحميل الصفحة
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ تم تحميل نموذج مركز إبداع التعليمي بنجاح');
  console.log('📋 عدد الخطوات: ' + totalSteps);
  console.log('🌍 عدد الدول المتوفرة: ' + Object.keys(provinces).length);
});

/* ====================================
   NOTES - ملاحظات للمطورين
   ====================================

   📌 تكامل Google Apps Script:
   - رابط Google Script موجود في دالة إرسال النموذج
   - يمكن تغيير الرابط حسب الحاجة
   - البيانات ترسل كـ FormData

   📌 نظام التحقق من الصحة:
   - يتم التحقق عند كل انتقال بين الخطوات
   - رسائل خطأ ديناميكية ومخصصة
   - إزالة تلقائية للأخطاء عند التعديل

   📌 المحافظات الديناميكية:
   - نظام ذكي يعرض المحافظات حسب الدولة
   - سهل الإضافة والتعديل عبر كائن provinces
   - يمكن إضافة دول ومحافظات جديدة بسهولة

   📌 تحسينات مستقبلية:
   - إضافة نظام حفظ تلقائي (Auto-save)
   - تخزين البيانات في LocalStorage
   - إضافة رسائل تأكيد قبل مغادرة الصفحة
   - تتبع تقدم المستخدم عبر Analytics

   ==================================== */
