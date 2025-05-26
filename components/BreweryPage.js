import Image from "next/image";
import { motion } from "framer-motion";

const beers = [
  {
    name: "Amber River",
    description: "Лёгкий карамельный эль с мягким вкусом и янтарным цветом.",
    image: "/beers/amber.png",
  },
  {
    name: "Dark Horn",
    description: "Насыщенное тёмное пиво с нотками кофе и шоколада.",
    image: "/beers/dark.png",
  },
  {
    name: "Wheat Gold",
    description: "Пшеничное пиво с фруктовыми нотками и освежающим вкусом.",
    image: "/beers/wheat.png",
  },
];

export default function BreweryPage() {
  return (
    <main className="min-h-screen bg-[#fdf6e3] text-[#3e2c1c] p-6">
      <section className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-10"
        >
          Koval Brewery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          Уникальные сорта крафтового пива, созданные с душой и вдохновением. Мы объединяем традиции и эксперименты, чтобы каждое пиво стало историей.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beers.map((beer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-4 text-center">
                <Image
                  src={beer.image}
                  alt={beer.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{beer.name}</h3>
                <p className="text-sm text-[#5e4b3c] mb-4">{beer.description}</p>
                <button className="px-4 py-2 border rounded-lg text-sm hover:bg-[#eee] transition">
                  Подробнее
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Пивоварня в сердце RiverCity</h2>
          <p className="max-w-2xl mx-auto text-lg text-[#5e4b3c]">
            Наша пивоварня расположена в живописном уголке города у реки. Мы создаём пиво, вдохновлённое природой, культурой и дружбой.
          </p>
        </motion.div>
      </section>
    </main>
  );
}