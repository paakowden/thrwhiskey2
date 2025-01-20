import Image from "next/image";

const page = () => {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_12.jpg"
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
            src="/images/3Whiskey_11.jpeg"
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
            src="/images/3Whiskey_11.jpeg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_11.jpeg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_12.jpg"
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
            src="/images/3Whiskey_13.jpeg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_14.jpeg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/3Whiskey_15.jpg"
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
