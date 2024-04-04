const PhotoWithText = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://scontent.fccj6-1.fna.fbcdn.net/v/t31.18172-8/415030_359448197462762_29979831_o.jpg?stp=dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QyobCXG25aUAX_E-Ln-&_nc_ht=scontent.fccj6-1.fna&oh=00_AfB0c0j8oqWB0xGgvU5UBcJbicPDOEDnTiPLTWU80V87jA&oe=6634C8E8"
        alt="The Temple"
        className="h-auto max-w-full"
      />
      <p className="mt-4 text-3xl font-semibold text-center text-white">
        The Aniyil Sree Krishna Swami Temple, Edavanakkad.
      </p>
    </div>
  );
};

export default PhotoWithText;
