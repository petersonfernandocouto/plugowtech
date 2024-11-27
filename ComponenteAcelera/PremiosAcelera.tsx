import React from 'react';
import Image from 'next/image';
import BGPremiosAce from '../IMG/CarouselAcelera/BGAceleraaCarousel.png';
import IMG1 from '../IMG/CarouselAcelera/IMG1.png';
import IMG2 from '../IMG/CarouselAcelera/IMG2.png';
import IMG3 from '../IMG/CarouselAcelera/Jet.jpg';
import IMG4 from '../IMG/CarouselAcelera/IMG4.png';
import IMG5 from '../IMG/CarouselAcelera/IMG5.png';

const PremiosAcelera = () => {
  const images = [IMG1, IMG2, IMG3, IMG4, IMG5];

  return (
    <div 
      style={{
        backgroundImage: `url(${BGPremiosAce.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 0',
      }}
      className="flex flex-col items-center overflow-hidden"
    >
      <h1 className="text-[45px] font-semibold font-[Audiowide] mb-[80px]">
        Descubra os prêmios incríveis do <span className="text-[#4A90E2]">Acelera</span>
      </h1>

      {/* Contêiner do carrossel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {/* Duplicamos as imagens para criar o efeito de loop contínuo */}
          {[...images, ...images].map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                className="w-[300px] lg:w-[200px] h-auto lg:h-[250px] rounded-[40px] lg:mb-[200px]"
                src={image}
                width={300}
                height={250}
                alt={`Prize ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="font-semibold font-[Audiowide] text-center max-w-[600px] mx-auto mt-5 leading-relaxed">
        Fique atento às próximas campanhas. As campanhas do Acelera Partnership são por tempo limitado. 
        Não perca a chance de participar da próxima experiência exclusiva.
      </p>
    </div>
  );
};

export default PremiosAcelera;