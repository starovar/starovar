import Image from 'next/image';

const BenefitCard = ({ imageSrc, title, description, imagePosition }) => {
  const reversed = imagePosition === 'left';
  const textPosition = reversed ? 'md:text-right' : 'md:text-left, md:pr-6';
  const imagePositionClasses = reversed ? 'md:order-first, md:pl-6' : 'md:order-last';

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full md:min-w-7xl mx-auto my-4 md:my-12">
      <div className={`w-full md:w-1/2 mb-6 md:mb-0 md:pr-6 ${imagePositionClasses}`}>
        <div className="w-full h-64 md:h-96 relative">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className={`w-full md:w-1/2 mb-6 md:mb-0 md:pl-6 ${textPosition}`}>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-gray-900 text-2xl font-bold">{title}</h3>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      imageSrc: '/branding.png',
      title: 'Уникальный дизайн',
      description: 'Мы разрабатываем уникальные дизайн-концепции, которые помогают выделиться на рынке и привлечь новых клиентов.',
      imagePosition: 'right',
    },
    {
      imageSrc: '/branding.png',
      title: 'Высокое качество',
      description: 'Мы используем современные технологии и профессиональное оборудование, чтобы обеспечить высокое качество наших услуг.',
      imagePosition: 'left',
    },
    {
      imageSrc: '/branding.png',
      title: 'Конкурентные цены',
      description: 'Мы предлагаем конкурентные цены на все наши услуги, чтобы наши клиенты могли получить качественный сервис по доступной цене.',
      imagePosition: 'right',
    },
  ];

  return (
    <section className="bg-yellow-600/5 border rounded-3xl">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            imageSrc={benefit.imageSrc}
            title={benefit.title}
            description={benefit.description}
            imagePosition={benefit.imagePosition}
          />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;







