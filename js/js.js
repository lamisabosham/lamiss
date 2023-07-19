const axios = require("axios");

function sendMessage(event) {
  event.preventDefault();

  const message = document.getElementById("message").value;
  const toNumber = "whatsapp:+970594762001"; // رقم الهاتف المستلم بصيغة WhatsApp

  // تأكد من استبدال 'YOUR_ACCOUNT_SID' و 'YOUR_AUTH_TOKEN' بمعرّف حساب Twilio الفعلي ورمز المصادقة الخاص بك
  const accountSid = "YOUR_ACCOUNT_SID";
  const authToken = "YOUR_AUTH_TOKEN";

  const payload = {
    body: message,
    from: "whatsapp:+970594762001", // رقم الهاتف المرتبط بحساب Twilio الخاص بك والذي تم تفعيله لخدمة WhatsApp
    to: toNumber,
  };

  // قم بتعديل الرابط التالي وفقًا لنقطة النهاية الفعلية للرسائل الواردة في حساب Twilio الخاص بك
  const apiUrl =
    "https://api.twilio.com/2010-04-01/Accounts/" +
    accountSid +
    "/Messages.json";

  axios
    .post(apiUrl, payload, {
      auth: {
        username: accountSid,
        password: authToken,
      },
    })
    .then((response) => {
      console.log("تم إرسال الرسالة بنجاح!");
      console.log(response.data);
      // قم بإجراء أي إجراءات إضافية بعد إرسال الرسالة بنجاح
    })
    .catch((error) => {
      console.error("فشل في إرسال الرسالة:", error);
      // قم بإدراج معالج خطأ للتعامل مع حالة الفشل
    });
}
