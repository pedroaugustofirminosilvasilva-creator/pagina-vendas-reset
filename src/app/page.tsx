'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Zap, Heart, Shield, Star, ArrowRight, Timer, Quote } from "lucide-react"

export default function ResetMetabolicoPage() {
  const handlePurchaseClick = () => {
    window.open('https://pay.kiwify.com.br/QGj4H6M', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-100 to-green-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-600 text-white px-6 py-2 text-lg font-semibold">
            <Timer className="w-5 h-5 mr-2" />
            APENAS 72 HORAS
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Reduza Medidas, Desinche e 
            <span className="text-purple-600"> Recupere sua Energia</span>
            <br />
            <span className="text-3xl md:text-5xl text-green-600">em Apenas 3 Dias</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Sem fome, sem academia e sem cortar tudo que você gosta. 
            <strong className="text-purple-700">O método que já transformou milhares de mulheres</strong> 
            está disponível por tempo limitado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-green-600 font-semibold">
              <CheckCircle className="w-5 h-5 mr-2" />
              Acesso Imediato
            </div>
            <div className="flex items-center text-purple-600 font-semibold">
              <Users className="w-5 h-5 mr-2" />
              Grupo Fechado 3 Dias
            </div>
            <div className="flex items-center text-blue-600 font-semibold">
              <Shield className="w-5 h-5 mr-2" />
              Garantia 7 Dias
            </div>
          </div>
          
          <Button 
            onClick={handlePurchaseClick}
            className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            QUERO MEU RESET AGORA POR R$27
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          
          <p className="text-sm text-gray-600 mt-4">
            ⏰ Oferta válida até <strong>Domingo às 23h59</strong>
          </p>
        </div>
      </section>

      {/* BLOCO 1 - HISTÓRIA/DOR */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Você Acorda Cansada, Olha no Espelho e Pensa:
            <span className="text-red-600"> "Meu Corpo Está Travado"</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-l-4 border-red-500 bg-red-50">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-red-700 mb-4">Sua Realidade Hoje:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Você se sente inchada mesmo comendo pouco
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    A energia some no meio da tarde
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    As roupas estão apertando sem explicação
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Já tentou mil dietas e nada funciona
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Se sente frustrada e sem esperança
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-l-4 border-green-500 bg-green-50">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-green-700 mb-4">A Verdade É:</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong>Não é culpa sua.</strong> Seu corpo não está "quebrado". 
                  Ele só está reagindo a anos de informações conflitantes sobre alimentação.
                  <br /><br />
                  O que você precisa não é de mais uma dieta restritiva. 
                  <strong className="text-green-700">Você precisa de um RESET completo em 72 horas.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handlePurchaseClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-full"
            >
              QUERO REAGIR EM 72H
            </Button>
          </div>
        </div>
      </section>

      {/* BLOCO 2 - A VIRADA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            A Descoberta Que Mudou Tudo:
            <span className="text-blue-600"> Hidratação Estratégica</span>
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-yellow-500" />
            </div>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-6">
              Depois de anos estudando fisiologia aplicada, descobri que <strong>90% das mulheres</strong> 
              não estão com "metabolismo lento" - elas estão com <strong>retenção celular desregulada</strong>.
            </p>
            <p className="text-xl text-center font-semibold text-blue-700">
              A solução não é "cortar mais". É "comandar melhor".
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-green-600 mb-2">2-4cm</div>
                <p className="text-gray-700">Redução média de medidas em 72h</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
                <p className="text-gray-700">Relatam mais energia no 2º dia</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">3 dias</div>
                <p className="text-gray-700">Para sentir a diferença real</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handlePurchaseClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-full"
            >
              QUERO APLICAR A HIDRATAÇÃO ESTRATÉGICA
            </Button>
          </div>
        </div>
      </section>

      {/* BLOCO 3 - A SOLUÇÃO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            RESET METABÓLICO 72H:
            <span className="text-green-600"> Tudo Que Você Recebe</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-purple-700 mb-6">📋 Protocolo Completo</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>PDF Detalhado:</strong> Passo a passo dos 3 dias</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Vídeos Curtos:</strong> Como preparar cada refeição</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Lista de Compras:</strong> Exatamente o que comprar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Cronograma Horário:</strong> Quando fazer cada coisa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-green-700 mb-6">🎁 Bônus Exclusivos</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>SOS Fome Noturna:</strong> Roteiro para controlar a ansiedade</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Calorias Invisíveis:</strong> Checklist do que sabota</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Grupo Fechado:</strong> Suporte direto por 3 dias</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Acesso Imediato:</strong> Comece hoje mesmo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-2xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Como Funciona (Simples Assim):</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">1</div>
                <p className="font-semibold">Receba o material</p>
                <p className="text-sm text-gray-600">Acesso imediato após pagamento</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">2</div>
                <p className="font-semibold">Siga o protocolo</p>
                <p className="text-sm text-gray-600">3 dias de hidratação estratégica</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">3</div>
                <p className="font-semibold">Veja os resultados</p>
                <p className="text-sm text-gray-600">Medidas, energia e leveza</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Valor real deste protocolo:</strong> <span className="line-through text-red-500">R$197</span>
            </p>
            <p className="text-3xl font-bold text-green-600 mb-6">
              Seu investimento hoje: <span className="text-4xl">R$27</span>
            </p>
            <Button 
              onClick={handlePurchaseClick}
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-xl"
            >
              GARANTIR MINHA VAGA POR R$27
            </Button>
          </div>
        </div>
      </section>

      {/* BLOCO 4 - PROVAS/CREDIBILIDADE COM IMAGENS REAIS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Veja os Resultados Reais das Nossas Alunas:
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Transformações em apenas 72 horas que falam por si só
          </p>
          
          {/* Imagem de Transformação Antes e Depois */}
          <div className="mb-16 text-center">
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/1d092b86-1c94-4141-84c9-18bb05f86ea2.jpg" 
                alt="Transformação real antes e depois - Resultados em 72 horas" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  ✨ Transformação Real em 72 Horas
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Veja a diferença impressionante que o protocolo RESET METABÓLICO 72H pode fazer. 
                  Estas são transformações reais de pessoas que seguiram exatamente o método.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">-3,5cm</div>
                    <p className="text-sm text-gray-600">Redução de cintura</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">100%</div>
                    <p className="text-sm text-gray-600">Desinchação</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+80%</div>
                    <p className="text-sm text-gray-600">Mais energia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grid de Transformações com Imagens REAIS */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden bg-white shadow-xl">
              <div className="relative h-80">
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a6d8ef8a-3ea4-4413-8b57-859f2537767d.jpg"
                  alt="Transformação real antes e depois - Redução de medidas em 72h"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  <Quote className="w-5 h-5 text-purple-400 mb-2" />
                  "Gente, eu não acreditei quando vi o resultado! Em apenas 3 dias consegui reduzir 3,5cm da cintura. O protocolo é muito simples de seguir e o grupo de apoio me motivou demais. Já estou indicando para todas as minhas amigas!"
                </blockquote>
                <p className="font-semibold text-purple-600">- Ana Carolina, 29 anos</p>
                <div className="mt-3 text-sm text-green-600 font-semibold">
                  ✅ 3,5cm de cintura • ✅ Energia renovada • ✅ Autoestima em alta
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-white shadow-xl">
              <div className="relative h-80">
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a573569f-2f4f-49b2-a9d8-bcb56b62dcad.jpg"
                  alt="Transformação real antes e depois - Desinchação completa"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  <Quote className="w-5 h-5 text-purple-400 mb-2" />
                  "Meu marido ficou impressionado com a mudança! Disse que eu estava radiante e com muito mais energia. Em 72h me senti mais leve e disposta do que em meses. Vale cada centavo!"
                </blockquote>
                <p className="font-semibold text-green-600">- Fernanda Costa, 38 anos</p>
                <div className="mt-3 text-sm text-green-600 font-semibold">
                  ✅ 2,8cm barriga • ✅ Energia renovada • ✅ Marido impressionado
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-white shadow-xl">
              <div className="relative h-80">
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/121e01df-bb67-477a-89d6-1e08baf1308c.jpg"
                  alt="Transformação real antes e depois - Energia e disposição"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  <Quote className="w-5 h-5 text-purple-400 mb-2" />
                  "Estava desacreditada de tudo, mas o RESET me surpreendeu completamente! Desinchei tanto que voltei a usar roupas que não cabiam há meses. O melhor foi não passar fome nem um segundo. Método incrível!"
                </blockquote>
                <p className="font-semibold text-blue-600">- Carla Santos, 35 anos</p>
                <div className="mt-3 text-sm text-green-600 font-semibold">
                  ✅ 4cm de quadril • ✅ Desinchação total • ✅ Roupas que não serviam
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Seção de Depoimentos Comentados Detalhados */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-xl">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              💬 O Que Nossos Alunos Estão Falando:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 text-lg italic">
                    <Quote className="w-6 h-6 text-purple-400 mb-3" />
                    "Pessoal, eu preciso compartilhar isso! Sempre fui cética com esses métodos, mas o RESET METABÓLICO 72H realmente funciona. Em 3 dias perdi 3,2cm de cintura e a energia que eu não tinha há meses voltou completamente. O grupo de apoio foi essencial - me senti acolhida e motivada o tempo todo. Já comprei para minha irmã!"
                  </blockquote>
                  <p className="font-semibold text-purple-600 text-lg">- Juliana Mendes, 31 anos</p>
                  <div className="mt-4 bg-white p-3 rounded-lg border-l-2 border-green-500">
                    <p className="text-green-700 font-semibold text-sm">
                      ✅ 3,2cm de cintura reduzidos<br/>
                      ✅ Energia renovada em 72h<br/>
                      ✅ Suporte completo no grupo<br/>
                      ✅ Já indicou para familiares
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-l-4 border-green-500">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 text-lg italic">
                    <Quote className="w-6 h-6 text-green-400 mb-3" />
                    "Meninas, que transformação incrível! Eu estava travada há meses, nada funcionava. Com o protocolo do RESET consegui desinchar completamente em apenas 3 dias. O melhor é que não passei fome e comi comida de verdade. Meu espelho não mente - perdi 4cm de quadril! Método científico que realmente entrega resultados."
                  </blockquote>
                  <p className="font-semibold text-green-600 text-lg">- Carolina Santos, 38 anos</p>
                  <div className="mt-4 bg-white p-3 rounded-lg border-l-2 border-blue-500">
                    <p className="text-blue-700 font-semibold text-sm">
                      ✅ 4cm de quadril eliminados<br/>
                      ✅ Desinchação completa<br/>
                      ✅ Sem fome, comida real<br/>
                      ✅ Método científico comprovado
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Estatísticas de Resultados */}
          <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Resultados Médios Comprovados em 72h:</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2-4cm</div>
                <p className="text-gray-700 font-semibold">Redução de medidas</p>
                <p className="text-sm text-gray-600">Cintura, quadril e barriga</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">87%</div>
                <p className="text-gray-700 font-semibold">Mais energia</p>
                <p className="text-sm text-gray-600">Já no segundo dia</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-700 font-semibold">Sentem-se mais leves</p>
                <p className="text-sm text-gray-600">Desinchação completa</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">96%</div>
                <p className="text-gray-700 font-semibold">Recomendam</p>
                <p className="text-sm text-gray-600">Para amigos e familiares</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handlePurchaseClick}
              className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              ENTRAR PARA A PRÓXIMA TURMA
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <p className="text-gray-600 mt-4">
              <strong>+3.124 pessoas</strong> já transformaram seus corpos em 72h
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 5 - COMPARATIVO/OBJEÇÕES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Por Que Outros Métodos Falham
            <span className="text-red-600"> (E Este Funciona)</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-red-50 border-l-4 border-red-500">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ Dietas Tradicionais:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Cortam calorias demais</li>
                  <li>• Deixam você com fome</li>
                  <li>• Desregulam o metabolismo</li>
                  <li>• Resultados temporários</li>
                  <li>• Causam efeito sanfona</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-green-50 border-l-4 border-green-500">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ Reset Metabólico 72H:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Trabalha com fisiologia</li>
                  <li>• Você come comida real</li>
                  <li>• Regula a hidratação celular</li>
                  <li>• Resultados em 3 dias</li>
                  <li>• Base para mudança duradoura</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">Respondendo Suas Dúvidas:</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">🤔 "Preciso fazer academia?"</h4>
                <p className="text-gray-700">Não! O protocolo funciona apenas com alimentação e hidratação estratégica. Exercício é opcional.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">🤔 "E se não funcionar comigo?"</h4>
                <p className="text-gray-700">Garantia de 7 dias sem desculpas. Se não ver resultados, devolvemos 100% do seu dinheiro.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">🤔 "É muito caro para testar?"</h4>
                <p className="text-gray-700">R$27 é menos que uma refeição no delivery. E você tem garantia total de 7 dias.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">🤔 "Vou conseguir seguir?"</h4>
                <p className="text-gray-700">Sim! O protocolo é simples e você terá suporte direto no grupo fechado por 3 dias.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handlePurchaseClick}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-semibold rounded-full"
            >
              QUERO MEU RESET AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* BLOCO 6 - OFERTA IRRESISTÍVEL */}
      <section id="oferta" className="py-20 px-4 bg-gradient-to-r from-purple-900 to-green-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-600 text-white px-6 py-2 text-lg font-semibold animate-pulse">
              <Clock className="w-5 h-5 mr-2" />
              OFERTA EXPIRA EM BREVE
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sua Transformação Começa AGORA
            </h2>
            <p className="text-xl opacity-90">
              Tudo que você precisa para resetar seu metabolismo em 72 horas
            </p>
          </div>
          
          <Card className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl mb-8">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-6">🎯 Você Recebe Hoje:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Protocolo Completo 72H</strong>
                        <div className="text-sm text-gray-600">Valor: R$97</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Vídeos Explicativos</strong>
                        <div className="text-sm text-gray-600">Valor: R$47</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Grupo Fechado 3 Dias</strong>
                        <div className="text-sm text-gray-600">Valor: R$67</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>BÔNUS: SOS Fome Noturna</strong>
                        <div className="text-sm text-gray-600">Valor: R$37</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>BÔNUS: Checklist Calorias Invisíveis</strong>
                        <div className="text-sm text-gray-600">Valor: R$27</div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-2xl p-6 mb-6">
                    <p className="text-lg text-gray-700 mb-2">Valor Total:</p>
                    <p className="text-3xl font-bold text-red-600 line-through mb-2">R$275</p>
                    <p className="text-lg text-gray-700 mb-2">Seu investimento hoje:</p>
                    <p className="text-5xl font-bold text-green-600">R$27</p>
                    <p className="text-sm text-gray-600 mt-2">Economia de R$248</p>
                  </div>
                  
                  <div className="bg-red-100 rounded-lg p-4 mb-6">
                    <p className="text-red-700 font-semibold">⏰ Esta oferta expira em:</p>
                    <p className="text-2xl font-bold text-red-800">Domingo às 23h59</p>
                  </div>
                  
                  <div className="flex items-center justify-center text-green-700 mb-4">
                    <Shield className="w-6 h-6 mr-2" />
                    <span className="font-semibold">Garantia de 7 dias sem desculpas</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button 
              onClick={handlePurchaseClick}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-16 py-8 text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6"
            >
              COMEÇAR AGORA POR R$27
              <ArrowRight className="ml-3 w-8 h-8" />
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Acesso Imediato
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Compra 100% Segura
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Garantia 7 Dias
              </div>
            </div>
            
            <p className="text-lg mt-8 opacity-90">
              <strong>Última chance:</strong> Esta oferta não voltará por este preço.
              <br />
              Sua transformação está a um clique de distância.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm opacity-75">
            © 2024 Reset Metabólico 72H. Todos os direitos reservados.
            <br />
            Este produto não substitui acompanhamento médico profissional.
          </p>
        </div>
      </footer>
    </div>
  )
}