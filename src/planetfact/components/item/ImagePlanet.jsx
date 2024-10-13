export const ImagePlanet = ({ src, geologySrc, attribute }) => {
  console.log(attribute);
  return (
    <>
      <div className={`${attribute} image__container`}>
        <img src={src} alt={attribute} className="planet"/>
        {geologySrc && <img src={geologySrc} alt="geology overlay" className="geology" />}
      </div>
    </>
  );
};
