<template>
  <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg
        class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M100 200V.5M.5 .5H200"
              fill="none"
            />
          </pattern>
        </defs>
        <svg
          x="50%"
          y="-1"
          class="overflow-visible fill-gray-50"
        >
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
        />
      </svg>
    </div>
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
    >
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <h1
              class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            >
              TECH Z
            </h1>
            <p class="mt-6 text-xl/8 text-gray-700">
              É um e-commerce especializado em eletroeletrônicos, trazendo as melhores marcas do
              mercado, como Apple, Samsung, Xiaomi, e muito mais.
            </p>
          </div>
        </div>
      </div>
      <div
        class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
      >
        <img
          class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src="@/assets/img/banner/banner-text.png"
          alt=""
        >
      </div>
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
            <p>
              Oferecemos uma experiência de compra confiável e acessível, com produtos de alta
              qualidade que vão desde smartphones e notebooks até acessórios tecnológicos
              indispensáveis para o dia a dia.
              Nosso compromisso é proporcionar as melhores ofertas, entrega rápida e um atendimento
              que coloca você em primeiro lugar. Explore nossa loja e encontre tecnologia de ponta
              ao seu alcance!
            </p>
            <ul
              role="list"
              class="mt-8 space-y-8 text-gray-600"
            >
              <li class="flex gap-x-3">
                <span>
                  <strong class="font-semibold text-gray-900">Garantia.</strong>
                  Oferecemos total segurança em sua compra, com garantia que cobre qualquer
                  defeito de fabricação.
                  Nosso compromisso é com sua satisfação e confiança em nossos produtos.
                  Conte com suporte dedicado para resolver qualquer questão rapidamente.
                </span>
              </li>
              <li class="flex gap-x-3">
                <span><strong class="font-semibold text-gray-900">Qualidade.</strong>
                  Produtos desenvolvidos com rigoroso padrão de qualidade para atender às
                  suas expectativas.
                  Utilizamos materiais e processos de excelência para garantir durabilidade e
                  eficiência.
                  Qualidade que você percebe desde o primeiro uso, assegurando sua
                  satisfação.
                </span>
              </li>
              <li class="flex gap-x-3">
                <span><strong class="font-semibold text-gray-900">Preço Justo.</strong>
                  Acreditamos que qualidade não precisa ser sinônimo de preços exorbitantes.
                  Nossos produtos possuem custo-benefício ideal, alinhando valor e
                  acessibilidade.
                  Preço justo para que você tenha o melhor, sem pesar no bolso.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
     name: 'BannerText',
     components: {

     }

}

</script>
