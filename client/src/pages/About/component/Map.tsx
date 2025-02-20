const Map = (props: { size?: string }) => {
  return (
    <div className="mx-[2rem] my-[5rem] font-roboto lg:mx-[10rem]">
      <div className="flex flex-col justify-start gap-[10rem] lg:mx-0 lg:flex-row">
        <div className="flex flex-col justify-start gap-[2rem]">
          <div>
            <h1 className="pt-[5rem] text-sm font-bold text-dark dark:text-white lg:text-5xl">
              Localisation
            </h1>
            <p className="py-4 text-dark dark:text-white lg:w-[35rem]">
              Découvrez nos produits/services dans nos locaux.
            </p>
          </div>
          <div className="flex gap-6">
            <div
              className="w-1 bg-dark dark:bg-white"
              style={{ height: props.size || "6rem" }}
            ></div>
            <div className="mt-1 flex flex-col gap-2">
              <h1 className="font-bold text-dark dark:text-white lg:text-4xl">Localisation</h1>
              <p className="text-dark dark:text-white lg:w-[35rem]">
                Carrefour Meec, dans les bureeux de BUNS Cameroun
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div
              className="w-1 bg-dark dark:bg-white"
              style={{ height: props.size || "8rem" }}
            ></div>
            <div className="mt-2 flex flex-col gap-2">
              <h1 className="font-bold text-dark dark:text-white lg:text-4xl">
                Horaires d’ouverture
              </h1>
              <p className="text-dark dark:text-white lg:w-[35rem]">
                De Lundi à Vendredi : 08H00 - 16H00
              </p>
              <p className="text-dark dark:text-white lg:w-[35rem]">Samedi : 09H00 - 14H00</p>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex  items-center justify-center ">
              <iframe
                id="map-canvas"
                className="left-0 top-0 h-[20rem] w-full border border-gray-300 shadow-lg lg:h-[40rem] lg:w-[67rem]"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Cameroon%20Marché%20Melen&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Marché Melen Map"
              ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
