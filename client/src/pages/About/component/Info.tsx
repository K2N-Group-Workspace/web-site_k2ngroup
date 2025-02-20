const Info = (props: { img: string; title: string; size?: string; description: string }) => {
  return (
    <div className="flex items-center font-roboto gap-4">
      {/* Image et séparateur */}
      <div className="flex flex-col items-center gap-4">
        <img
          className="lg:w-auto w-[10rem] h-[1rem] lg:h-auto rounded-lg object-cover"
          src={props.img}
          alt="Image principale"
        />
        {/* Trait vertical */}
        <div className="w-1 bg-white" style={{ height: props.size || "10rem" }}></div>
      </div>

      {/* Section du texte */}
      <div className="flex flex-col mt-6 gap-2">
        <h1 className="lg:text-4xl font-bold text-white">{props.title}</h1>
        <p className="text-white lg:w-[30rem]">{props.description}</p>
      </div>
    </div>
  );
};

export default Info;
