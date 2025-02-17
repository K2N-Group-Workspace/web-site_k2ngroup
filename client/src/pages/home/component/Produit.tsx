const Produit = () => {
    return (
      <div className="flex my-6 justify-center  gap-12 font-roboto">
            <div className="gap-6 flex flex-col">
          <img
           className="w-[30rem] h-[35rem] rounded-lg border-solid border-custom-gold cursor-pointer"
       src="../public/poisson1.png"
           alt="poisson"
      />
        <img
           className="w-[30rem] h-[25rem] rounded-lg border-solid border-custom-gold cursor-pointer"
            src="../public/poisson3.png"
           alt="poisson"
         /> 
            </div>
            <div className="gap-6 flex flex-col">
         <img
           className="w-[30rem] h-[25rem] border-solid rounded-lg border-custom-gold cursor-pointer"
           src="../public/poisson2.png"
           alt="poisson"
         />
         <img
           className="w-[30rem] h-[30rem] border-solid rounded-lg border-custom-gold cursor-pointer"
            src="../public/poisson4.png"
            alt="poisson"
          />
            </div>
        </div>

  );
};

export default Produit;
