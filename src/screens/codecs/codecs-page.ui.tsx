import { Footer } from "~@/src/widgets/footer";
import { Header } from "~@/src/widgets/header";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~@/src/shared/ui/tabs";

export function CodecsPage() {
  return (
    <>
      <Header />
      <main className="container flex min-h-[75dvh] gap-2.5">
        <Tabs className="flex lg:flex-row flex-col w-full">
          <TabsList className="lg:w-1/3 lg:flex-col items-start gap-2.5 overflow-x-auto md:h-full overflow-y-hidden">
            <TabsTrigger value="codecs">
              Кодекс предпринимателской этики
            </TabsTrigger>
            <TabsTrigger value="item">
              Кодекс предпринимателской этики
            </TabsTrigger>
          </TabsList>
          <TabsContent value="codecs" className="lg:w-2/3 lg:border-l lg:pl-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro
            quo ratione vel fugit excepturi, adipisci qui debitis! Eligendi
            saepe aut vero temporibus. Reprehenderit quam ea magnam at alias
            deleniti. Atque culpa in facilis, rerum officiis nostrum! Similique
            eligendi, voluptatem reprehenderit iste, dolorum tempora obcaecati
            at numquam facilis consectetur tenetur dignissimos velit voluptas
            nisi suscipit nobis? Et deleniti reprehenderit quaerat! Laboriosam
            quos sint esse. Unde dolorem dolor a, earum ipsam quasi officiis
            similique eveniet odio provident, ea nam temporibus deserunt
            accusantium perspiciatis. Exercitationem consectetur, ratione
            officiis facere sunt tempore nisi! Dicta, rem illo temporibus,
            iusto, expedita repellat dolores ex aperiam voluptates facilis non
            quae nemo adipisci iste? Deleniti nihil vero nemo iure totam. Iste
            magni nostrum voluptatem, fuga laboriosam blanditiis? Neque eius
            facere, laudantium aut, quis debitis, error minima tempore adipisci
            omnis dolorem voluptatibus quos! Totam, voluptate consequuntur
            accusamus reiciendis temporibus molestiae exercitationem est
            accusantium. Aspernatur iusto omnis neque fuga? Quasi, animi ipsum,
            consectetur, rerum eligendi laudantium consequatur error dolore quia
            saepe nisi culpa maxime omnis? Incidunt blanditiis praesentium
            voluptatem animi ducimus, sequi iusto aperiam adipisci in, itaque
            quasi explicabo. Eveniet nam vel voluptas eaque natus suscipit
            dolore molestiae pariatur. Numquam quam quas nam animi eveniet
            laudantium quos distinctio veritatis dolorum repellat, illum nihil
            ex, eos saepe sunt ut neque! Dolor nesciunt laudantium nulla ab
            asperiores, sapiente cum soluta esse temporibus vero sed nostrum
            perferendis eaque eligendi non amet mollitia a, eos maxime minus
            voluptates alias, repudiandae tenetur. Repellat, ipsum. Eius, ullam
            vel. Dolores omnis perferendis exercitationem quos optio nobis
            tempore. Inventore, sit deserunt numquam saepe ea fugit fuga sint
            cum totam labore eius modi animi, voluptatem incidunt vel
            exercitationem? Dicta nemo quidem pariatur explicabo nihil culpa
            nisi incidunt maxime, sequi in repellendus ea odio magnam non.
            Obcaecati neque, vero nemo modi culpa cupiditate, velit voluptatibus
            reprehenderit veritatis, quis nihil?
          </TabsContent>
          <TabsContent value="item" className="lg:w-2/3 lg:border-l lg:pl-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro
            quo ratione vel fugit excepturi, adipisci qui debitis! Eligendi
            saepe aut vero temporibus. Reprehenderit quam ea magnam at alias
            deleniti. Atque culpa in facilis, rerum officiis nostrum! Similique
            eligendi, voluptatem reprehenderit iste, dolorum tempora obcaecati
            at numquam facilis consectetur tenetur dignissimos velit voluptas
            nisi suscipit nobis? Et deleniti reprehenderit quaerat! Laboriosam
            quos sint esse. Unde dolorem dolor a, earum ipsam quasi officiis
            similique eveniet odio provident, ea nam temporibus deserunt
            accusantium perspiciatis. Exercitationem consectetur, ratione
            officiis facere sunt tempore nisi! Dicta, rem illo temporibus,
            iusto, expedita repellat dolores ex aperiam voluptates facilis non
            quae nemo adipisci iste? Deleniti nihil vero nemo iure totam. Iste
            magni nostrum voluptatem, fuga laboriosam blanditiis? Neque eius
            facere, laudantium aut, quis debitis, error minima tempore adipisci
            omnis dolorem voluptatibus quos! Totam, voluptate consequuntur
            accusamus reiciendis temporibus molestiae exercitationem est
            accusantium. Aspernatur iusto omnis neque fuga? Quasi, animi ipsum,
            consectetur, rerum eligendi laudantium consequatur error dolore quia
            saepe nisi culpa maxime omnis? Incidunt blanditiis praesentium
            voluptatem animi ducimus, sequi iusto aperiam adipisci in, itaque
            quasi explicabo.
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
}
