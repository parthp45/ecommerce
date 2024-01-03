export default function Home() {
  const data = [
    {
      id: 1,
      name: "Tshirt",
      price: 10000,
      imgSrc:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=384&q=75",
    },
    {
      id: 2,
      name: "Tshirt",
      price: 10000,
      imgSrc:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=384&q=75",
    },
    {
      id: 3,
      name: "Tshirtsd",
      price: 1000,
      imgSrc:
        "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=384&q=75",
    },
  ];
  return (
    <main className={"m-4"}>
      <div>
        <h1 className="text-center text-4xl font-bold m-4">Trending</h1>
        <div className={`flex gap-4 justify-center`}>
          {data.map((item) => (
            <div
              key={item.id}
              className={`w-[350px] rounded-lg p-3 flex flex-col items-center bg-gray-200 dark:bg-gray-800`}
            >
              <img src={item.imgSrc} alt={item.name} width={300} height={300} />
              <div
                className={`flex justify-between flex-wrap
                 ml-auto mr-auto w-[80%] py-[6px] px-4 rounded-full items-center bg-blue-400`}
              >
                <h4>{item.name}</h4>
                <h5 className="p-2 rounded-full bg-red-400">{item.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
