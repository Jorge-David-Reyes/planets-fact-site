import { useState } from 'react';
import { PlanetLayout } from '@/planetfact/layout';
import { PrimaryButton } from '@/planetfact/components/button'; 
import { Statistics, ImagePlanet } from '@/planetfact/components/item';
import data from '@/data/data.json';
import { getImagePath } from '@/helpers/imageHelper';

const name = 'Mars';
const attribute = 'mars__image';

export const MarsPage = () => {
  const planet = data.find(p => p.name === name);
  const [selectedSection, setSelectedSection] = useState('overview');

  const handleSectionChange = (section) => {
    console.log(section);
    setSelectedSection(section); 
  };

  const sectionContent = planet[selectedSection].content;
  const sectionSource = planet[selectedSection].source;

  let geologyImage = selectedSection === 'geology' ? getImagePath(planet.images.geology) : null;
  let imageSource = getImagePath(planet.images.planet);
  if (selectedSection === 'structure') {
    imageSource = getImagePath(planet.images.internal);
  }

  return (
      <PlanetLayout
        image={<ImagePlanet src={imageSource} geologySrc={geologyImage} attribute={attribute} />}
        title={planet.name}
        paragraph={sectionContent}
        menu={
          <>
            <PrimaryButton title='overview' onClick={() => handleSectionChange('overview')} />
            <PrimaryButton title='internal structure' onClick={() => handleSectionChange('structure')} />
            <PrimaryButton title='surface geology' onClick={() => handleSectionChange('geology')} />
          </>
        }
        statistics={
          <>
            <Statistics title="Rotation Time" content={planet.rotation} />
            <Statistics title="Revolution Time" content={planet.revolution} />
            <Statistics title="Radius" content={planet.radius} />
            <Statistics title="Average Temp" content={planet.temperature} />
          </>
        }
        source={sectionSource}
      />
  )
}
