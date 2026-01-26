export async function GET() {
  const data = [
    {
      id: 1,
      serviceTitle: "Flower Arrangement",
      imgFirst: "/0921-1.png",
      imgSecond: "/0921-1.png",
      imgThird: "/0921-1.png",
      message: [{ content: "", href: "", icon: "" }],
      serviceDescription: [
        {
          type: "text",
          content:
            "代官山・祐天寺で愛され続けて20年以上。2001年の開校以来、大切にしているのは「花と向き合う時間の豊かさ」です。花を通じた自己表現と癒やしのひとときをお届けします。",
        },
      ],
      serviceLink: "",
      serviceInsta: "",
    },
    {
      id: 2,
      serviceTitle: "Flower Arrangement",
      imgFirst: "/0921-1.png",
      imgSecond: "/0921-1.png",
      imgThird: "/0921-1.png",
      message: [
        {
          content: "",
          href: "",
          icon: "",
        },
      ],
      serviceDescription: [
        {
          type: "text",
          content:
            "どんなお洋服にもなじむ、きらめくお守り。日常に自然に溶け込み、ふとした瞬間に自信をくれる。毎日を少しだけ華やかにしてくれるイヤリングを中心としたラインナップです。",
        },
      ],
      serviceLink: "",
      serviceInsta: "",
    },
    {
      id: 3,
      serviceTitle: "Flower Arrangement",
      imgFirst: "",
      imgSecond: "",
      imgThird: "",
      message: [
        {
          content: "Instagramにて近日公開予定",
          href: "https://www.instagram.com/hakkoubeauty365/",
          icon: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
        },
      ],
      serviceDescription: [
        { type: "text", content: "美しさは健やかな体から。" },
        {
          type: "link",
          content: "発酵食大学での学びに基づき",
          href: "https://hakkoushoku.jp/",
          icon: "http://localhost:3000/0921-1.png",
        },
        { type: "text", content: "、美容に良い発酵食品を追求。今後は" },
        {
          type: "link",
          content: "Instagramを通じて",
          href: "https://www.instagram.com/hakkoubeauty365/",
          icon: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
        },
        {
          type: "text",
          content: "、皆様の毎日を健やかにする情報を発信してまいります。",
        },
      ],
      serviceLink: "https://www.instagram.com/hakkoubeauty365/",
      serviceInsta: "",
    },
  ];
  return Response.json(data);
}
