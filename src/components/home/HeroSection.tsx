const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">당신의 서재를 채워줄 전자책</h1>
      <p className="text-lg mb-6">베스트셀러부터 희귀 도서까지, 지금 바로 만나보세요.</p>
      <button className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
        지금 탐색하기
      </button>
    </section>
  );
};

export default HeroSection;
