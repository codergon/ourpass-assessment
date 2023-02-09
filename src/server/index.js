import { createServer, Factory, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    models: {
      card: Model,
      invoice: Model,
    },

    seeds(server) {
      server.create("card", {
        id: "1",
        type: "wire transfer",
        acctName: "Barly Vallendito",
        acctNumber: "9700 0023 4300 2900",
        routingNo: "084009519",
      });
      server.create("invoice", {
        id: "inv-2022-010",
        cardId: "1",
        totalAmount: 4800,
        issuedDate: "2022-01-11",
        dueDate: "2022-01-18",
        billedTo: {
          name: "Barly Vallendito",
          company: "Monlight Agency LTD",
          address: "New York, USA",
        },
        seller: {
          name: "Dipa Inhouse",
          email: "hello@dipainhouse.com",
          companyLogo: "assets/images/dipa.png",
          address: {
            street: "Ijen Boulevard Street 101",
            city: "Malang City, 65115",
            country: "East Java, Indonesia",
          },
        },
        items: [
          {
            id: "1",
            tax: 0,
            rate: 40,
            hours: 120,
            total: 4800,
            description: "",
            name: "Payment Project - Monlight Mobile Design",
          },
        ],
      });
    },

    routes() {
      this.get("api/cards/:id", (schema, request) => {
        let id = request.params.id;
        return schema.cards.find(id);
      });

      this.get("api/invoice/:id", (schema, request) => {
        let id = request.params.id;
        return schema.invoices.find(id);
      });
    },
  });

  return server;
}
