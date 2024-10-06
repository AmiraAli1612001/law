import React from "react";

const PrintContract = () => {
  return (
    <div className="printable w-full max-w-screen-lg mx-auto bg-white py-4">
      <section className="text-contract  relative">
        <div className=" w-[80%] flex justify-between  mx-auto">
          <div>
            <h1 className="text-xl font-semibold">
              شركة صقور القمة للمحاماة والاستشاريات القانونية
            </h1>
            <h2 className="uppercase text-sm">
              soqour al aemma law firm and legal consultations
            </h2>
          </div>
          <div className="bg-white px-8 py-4  z-10 relative">
            <img
              className="w-20  "
              src="/images/logos/soqour-logo-1.png"
              alt=""
            />
          </div>
        </div>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-contract w-full h-2"></span>
      </section>
      <div className="w-[80%] mx-auto flex flex-col gap-6">
        <section className="text-center font-semibold leading-relaxed">
          <h4 className=" underline text-lg">عقد اتعاب محاماة رقم 1041</h4>
          <p>
            الحمد لله والصلاة والسلام على سيدنا رسول الله وعلى آله وصحبه أجمعين
            وبعد،
          </p>
          <p>
            إنه في يوم الثلاثاء تاريخ /14/ 03 / 1446هـ حرر هذا العقد بين كل من:
          </p>
        </section>
        <section className="text-center leading-relaxed">
          <h4 className="font-semibold underline text-lg">أطراف التعاقد</h4>
          <div className="text-start">
            <span className="font-semibold">الطرف الأول:</span>{" "}
            <span>
              شركة صقور القمة للمحاماة والاستشارات القانونية ، العنوان العليا
              شارع موسى بن نصیر بمدينة الرياض، ممثلاً بالمحامي على صلفيق العنزي،
              هوية وطنية رقم : 51551، بصفته مديراً عاماً للشركة - ويشار إليه
              فيما بعد بالطرف الأول.
            </span>
          </div>
          <div className="text-start">
            <span className="font-semibold">الطرف الثاني:</span>{" "}
            <span>
              مؤسسة <span>علي عبدالله</span> هوية وطنية رقم: <span>113131</span>{" "}
              ويمثلها بالعقد : الأستاذ / / سجل تجاري : ( 101 مالكها : 11 هوية
              رقم: 11 جوال رقم 2 106، جوال عنزي 05
            </span>
          </div>
        </section>
        <section className="text-center leading-relaxed">
          <h4 className="font-semibold underline text-lg">التمهيد</h4>
          <p className="text-start">
            حيث أن الطرف الأول مرخص له بممارسة المحاماة والاستشارات القانونية
            والشرعية من وزارة العدل بترخيص رقم ،41926، ويقدم خدماته لعملائه في
            مجال الاستشارات القانونية والتمثيل القانوني والمرافعة والمدافعة أمام
            كافة المحاكم باختلاف أنواعها ودرجاتها والجهات ذات العلاقة بالمملكة
            العربية السعودية، وحيث أن الطرف الثاني لدية الرغبة في توكيل الطرف
            الأول بشأن الدعوى المنظورة لدى المحكمة العامة بمحافظة الخرج في
            القضية رقم <span>(41414)</span> ضد المدعى عليها{" "}
            <span>// منار محمد</span> من المدعي المقامة وعليه فقد التقت إرادة
            الطرفين على التعاقد وهما بكامل اهليتهما الشرعية المعتبرة على البنود
            التالية
          </p>
        </section>
        <section className="text-center leading-relaxed">
          <h4 className="font-semibold underline text-lg">
            البند الأول: (التمهيد)
          </h4>
          <p>يعد التمهيد السابق جزء لا يتجزأ من العقد مكمل ومتمم له.</p>
        </section>
        <section className="text-center leading-relaxed">
          <h4 className="font-semibold underline text-lg">
            البند الثاني: (نطاق العمل)
          </h4>
          <p className="text-start">
            دراسة الدعوى وقراءة وتحليل الوقائع ورسم الاستراتيجية الأمثل للدفاع
            وكتابة المذكرات واللوائح القانونية وتقديمها للجهات المختصة بهذه
            القضية ومراجعة المحاكم والجهات ذات العلاقة وتقديم الاستشارات
            القانونية وبذل الجهد والعناية لنجاح القضية، كما أن للطرف الأول وفق
            وجهة نظره ورؤيته وحسب ما تقتضيه مصلحة الدعوى ومصلحة الطرف الثاني
            وموافقته كتابة انهاء موضوع الدعوى بالطرق الودية مع الخصم، وبهذا
            يلتزم الطرف الثاني بدفع كافة المستحقات المالية للطرف الأول.
          </p>
        </section>
        <section className="text-center leading-relaxed"></section>
        <section className="text-center leading-relaxed"></section>
      </div>
    </div>
  );
};

export default PrintContract;
