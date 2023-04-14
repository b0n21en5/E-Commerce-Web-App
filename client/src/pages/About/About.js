import React from "react";
import Layout from "../../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Ecommerce"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            non, ut perferendis iusto mollitia nam iste eligendi voluptatem
            dicta, autem consequuntur deserunt explicabo laudantium aperiam
            inventore labore architecto error omnis nesciunt nulla enim
            pariatur! Laboriosam quibusdam eum, debitis consectetur nemo ipsum
            molestias at doloribus, ad obcaecati in vero numquam aut corrupti
            illo? Reprehenderit dolorem ipsam natus ut doloribus possimus
            mollitia reiciendis delectus hic, distinctio beatae placeat quae
            dolores ratione atque?
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default About;
