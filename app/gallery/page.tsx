import Image from "next/image";

const page = () => {
  return (
    <div className="container py-24 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_9.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_21.jpeg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_2.jpeg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_4.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_6.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_20.jpeg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_19.jpeg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_7.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_22.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_23.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/images/3Whiskey_18.jpeg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_8.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
