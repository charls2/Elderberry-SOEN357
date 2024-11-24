
function App() {
  return (
    <div class="bg-gray-100">

  <div class="min-h-screen flex flex-col items-center">

    <header class="bg-orange-300 w-full py-12 text-center">
      <h1 class="text-4xl font-bold text-black">Welcome to Elderberry</h1>
      <p class="text-lg font-medium text-black mt-2">Bridging Generations, one connection at a time</p>
      <button class="mt-6 px-6 py-3 bg-yellow-200 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300">
        Join Now / Login
      </button>
    </header>

    <section class="bg-brown-600 w-full py-12 text-center">
      <h2 class="text-2xl font-bold text-yellow-200 mb-8">Activities Currently Offered</h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="bg-yellow-200 p-6 text-black rounded-lg shadow-lg">
          <h3 class="font-semibold text-lg">About Us</h3>
        </div>

        <div class="bg-yellow-200 p-6 text-black rounded-lg shadow-lg">
          <h3 class="font-semibold text-lg">Become a Mentor</h3>
        </div>

        <div class="bg-yellow-200 p-6 text-black rounded-lg shadow-lg">
          <h3 class="font-semibold text-lg">Need Help?</h3>
        </div>
      </div>
    </section>

  </div>

</div>
  );
}

export default App;
