import React from "react";
import { FaEnvelope } from "react-icons/fa";

import "./index.css";
import appStoreLogo from "../assets/appStoreLogo.png";
import googlePlayLogo from "../assets/googlePlayLogo.png";
import qrCode from "../assets/qrCode.png";
import firstPhone from "../assets/firstPhone.png";
import secondPhone from "../assets/secondPhone.png";
import thirdPhone from "../assets/thirdPhone.png";
import fourthPhone from "../assets/fourthPhone.png";
import fifthPhone from "../assets/fifthPhone.png";
import sixthPhone from "../assets/sixthPhone.png";
import IconOne from "../assets/IconOne.png";
import IconTwo from "../assets/IconTwo.png";
import IconThree from "../assets/IconThree.png";
import IconFour from "../assets/IconFour.png";
import IconFive from "../assets/IconFive.png";
import IconSix from "../assets/IconSix.png";
import IconSeven from "../assets/IconSeven.png";
import IconEight from "../assets/IconEight.png";
import IconNine from "../assets/IconNine.png";
import IconTen from "../assets/IconTen.png";
import IconEleven from "../assets/IconEleven.png";
import card from "../assets/card.png";
import phoneHandCard from "../assets/phoneHandCard.png";
import NICLogo from "../assets/NICLogo.png";
import municipaleLogo from "../assets/municipaleLogo.png";
import justiceLogo from "../assets/justiceLogo.png";
import halfIPhone14 from "../assets/halfIPhone14.png";
import smile from "../assets/smile.png";
const Main = () => {
  return (
    <>
      <main>
        <img className="qrCode" src={qrCode} alt="" />
        <img className="firstPhone" src={firstPhone} alt="" />

        <section className="firstSection" id="section1">
          <div className="firstSection--text">
            <h3> .. خدماتنا لك اقرب </h3>
            <p>
              طورت أمانة منطقة الرياض تطبيق مدينتي يكون نافذتك إلى العاصمة
              الرياض، حيث يتيح لك باقي متنوعة من الخدمات الإلكترونية التي صممت
              لتكون أقرب إليك ويمكنك الوصول إليها بتجربة سلسلة وآمنة
            </p>
          </div>
          <div className="store--logos">
            <img src={appStoreLogo} alt="" />
            <img src={googlePlayLogo} alt="" />
          </div>
        </section>

        <section id="section2" className="secondSection">
          <img src={secondPhone} alt="" />
          <div className="secondSection--text">
            <h3>
              ! <span>بـأكثر من 16 خدمة</span> بين يديك
            </h3>
            <p>
              خدمات نوعية مؤتمتة تيسّرها أمانة منطقة الرياض بمنصة واحدة تختصر
              وقتك وتسهل أعمالك
            </p>
          </div>
        </section>

        <section id="section2" className="thirdSection">
          <img src={thirdPhone} alt="" />
          <div className="thirdSection_rightSide">
            <div className="thirdSection--text">
              <h3>الرخص الإنشائية</h3>
              <p>
                خدمات إلكترونية تواكب التوسع العمراني وتسهل رحلتك في البناء
                والتشييد حيث يمكنك من خلاله تقديم الطلب ومتابعة عدة خدمات
              </p>
            </div>
            <div className="subTitle--section">
              <div className="subTitle--section--Icon">
                <p>إنشاء رخصة بناء</p>
                <img src={IconOne} alt="" />
              </div>
              <div className="subTitle--section--Icon">
                <p>رخصة تسوير</p>
                <img src={IconTwo} alt="" />
              </div>
              <div className="subTitle--section--Icon">
                <p>اصدار رخصة بناء بالتزامن</p>
                <img src={IconThree} alt="" />
              </div>
              <div className="subTitle--section--Icon">
                <p>رخصة هدم مع وجود رخصة</p>
                <img src={IconFour} alt="" />
              </div>
              <div className="subTitle--section--Icon">
                <p>رخصة هدم مع عدم وجود رخصة</p>
                <img src={IconFive} alt="" />
              </div>
              <div className="subTitle--section--Icon">
                <p> رخصة ترميم مع وجود رخصة</p>
                <img src={IconSix} alt="" />
              </div>
              <div className="subTitle--section--Icon">
                <p>رخصة ترميم مع عدم وجود رخصة</p>
                <img src={IconSeven} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="section2" className="fourthSection">
          <div className="fourthSection_rightSide">
            <div className="fourthSection--text">
              <h3>الخدمات الاستعلامية</h3>
              <p>
                تعرّف على رحلة معاملاتك وطلباتك من أمانة منطقة الرياض بصورة أسرع
                وأسهل
              </p>
            </div>
            <div className="subTitle--fourthsection">
              <div className="subTitle--fourthsection--right">
                <div className="subTitle--fourthSection--Icon">
                  <p>الاستعلام عن معاملة</p>
                  <img src={IconEight} alt="" />
                </div>
                <div className="subTitle--fourthSection--Icon">
                  <p> السيارت التالفة والمحجوزة</p>
                  <img src={IconNine} alt="" />
                </div>
                <div className="subTitle--fourthSection--Icon">
                  <p> شهادة صحية</p>
                  <img src={IconEight} alt="" />
                </div>
              </div>
              <div className="subTitle--fourthsection--left">
                <div className="subTitle--fourthSection--Icon">
                  <p> رخص الانشطة التجارية</p>
                  <img src={IconTen} alt="" />
                </div>
                <div className="subTitle--fourthSection--Icon">
                  <p>الافراج عن سيارة محجوزة</p>
                  <img src={IconEleven} alt="" />
                </div>
              </div>
            </div>
          </div>
          <img src={fourthPhone} alt="" />
        </section>

        <section id="section2" className="fifthSection">
          <img src={fifthPhone} alt="" />
          <div>
            <div className="fifthSection--text">
              <h3>خدمات المدينة</h3>
              <p>ابحث عن أقرب حديقة لك تناسب احتياجاتك واحتياجات عائلتك </p>
            </div>
            <img src={card} className="cardImg" alt="" />
          </div>
        </section>

        <section id="section2" className="sixthSection">
          <div className="sixthSection--text">
            <h3>خدمات المواعيد</h3>
            <p>احجز مواعيدك مع أمانة منطقة الرياض بضغطك زر </p>
          </div>
          <img src={sixthPhone} alt="" />
        </section>

        <section className="seventhSection">
          <img src={phoneHandCard} alt="" />

          <div className="seventhSection--text">
            <h3>بلاغات 940</h3>
            <p>
              قدّم بلاغاتك باستخدام الوسائط المتعددة ليصلنا صوتك بشكلٍ أوضح{" "}
            </p>
          </div>
        </section>

        <section id="section4" className="eigthSection">
          <h3>شركاء مدينتي MyCity</h3>
          <div className="partnersLogos">
            <img src={justiceLogo} alt="" />
            <img src={municipaleLogo} alt="" />
            <img src={NICLogo} alt="" />
          </div>
        </section>

        <section id="section3" className="ninethSection">
          <div className="ninethSection--text">
            <h3> دليل تطبيق مدينتي</h3>
            <p>
              يوفر الدليل الشرح الكامل للتطبيق والذي وهو يحوي جميع الخطوات
              المصورة خطوة بخطوة ، نحن نضمن لك رحلة تعليمية سهله وسلسة
            </p>
            <div className="ninethSection--buttons">
              <a href="#1">حمل التطبيق</a>
              <button>تنزيل الدليل الآن</button>
            </div>
          </div>

          <img src={halfIPhone14} alt="" />
        </section>

        <section id="section5" className="tenthSection">
          <img src={smile} alt="" />
          <div className="tenthSection--text">
            <h3> لتجربة مستخدم أفضل</h3>
            <p>
              إن كانت لديكم أي ملاحظات أو أراء تساعد في تحسين التطبيق يتواصل عبر
              حساب حول تجربة المستخدم يتواصل عبر حساب
            </p>
            <div className="tenthSection--buttons">
              <button>
                <FaEnvelope
                  style={{ verticalAlign: "sub", marginRight: "17px" }}
                />
                ux@alriyadh.gov.sa
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
