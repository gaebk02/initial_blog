// next js 의 이미지 레이지 로딩에대해서 알아볼것
import Image from "next/image";

// use rfc snippet
export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-8 border-black dark:border-slate-300 drop-shadow-xl shadow-black rounded-full mx-auto"
        src="/images/KIMTAEKYUN.jpg"
        alt="KIMTAEKYUN"
        width={200}
        height={200}
        priority={true}
        // priority가 뭔지 알아야함
      />
    </section>
  );
}
