import Image from 'next/image';

const ServiceCard = ({ image, title, description, reversed }) => {
    const imagePosition = reversed ? 'left' : 'right';
    const textPosition = reversed ? 'right' : 'left';
  
    return (
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full md:max-w-5xl mx-auto my-12">
        <div className={`w-full md:w-1/2 mb-6 md:mb-0 md:pr-6 ${textPosition === 'left' ? 'md:order-first' : 'md:order-last'}`}>
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-lg">{description}</p>
          </div>
        </div>
        <div className={`w-full md:w-1/2 mb-6 md:mb-0 md:pl-6 ${imagePosition === 'left' ? 'md:order-first' : 'md:order-last'}`}>
          <div className="w-full h-64 md:h-96 relative">
            <Image src={image} alt={title} width={512} height={384} />
          </div>
        </div>
      </div>
    );
  };
  
  const ServicesSection = () => {
    const services = [
      {
        image: '/branding.png',
        title: 'Веб-дизайн',
        description: 'Разработка уникального дизайна для сайтов, логотипов, фирменного стиля и других проектов',
        reversed: true,
      },
      {
        image: '/branding.png',
        title: 'Маркетинг и реклама',
        description: 'Разработка и внедрение маркетинговых стратегий, проведение рекламных кампаний в интернете и на традиционных носителях',
        reversed: false,
      },
    ];
  
    return (
      <section className="py-20">
        <div className="container mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              reversed={service.reversed}
            />
          ))}
        </div>
      </section>
    );
  };

export default ServicesSection;






