import cus_img from "../assets/customer-image.png";
import star from "../assets/star.png";

const Customer = () => {
  return (
    <div className="bg-[#FAFAFA] px-40 mt-20">
      <p className="text-4xl pt-20">Our Customer Say</p>
      <div className="flex mt-12">
        <div>
          <p className="text-base">
            Purus, eget vitae quam quam id neque. Risus integer pharetra viverra
            sit. Non, sed consequat morbi sit vitae mollis. Mauris eu diam
            adipiscing et amet, ut. Donec viverra sed est elit pretium nibh et.
            Ut varius erat vulputate augue nulla consectetur. Blandit tortor,
            bibendum mi magna sapien dictum. Ullamcorper ut risus pretium ac
            aliquam. Risus ante in sit ac pellentesque aliquam ut. Commodo
            tristique commodo mi malesuada. Sed tristique pharetra tincidunt
            quis convallis in elementum, aliquam blandit. Purus tortor enim
            pharetra neque. Quisque sed ultricies fermentum malesuada. Nulla
            pharetra non pellentesque massa arcu. Feugiat odio sapien faucibus
            ante sit neque sagittis nibh massa. In commodo nisl mattis et amet
            diam orci pharetra.
          </p>
          <img src={star} width='150px' className="mt-5" alt="" />
          <p className="text-xl mt-3">Oyeniyi Adedoyin</p>
          <p className="mt-3">Digital Marketer</p>
        </div>
        <img src={cus_img} width="570px" alt="" className="ml-4" />
      </div>
    </div>
  );
};

export default Customer;
