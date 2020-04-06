import React from "react";
import { View, StyleSheet, ScrollView, FlatList, Linking } from "react-native";
import Header from "../components/Header";
import PostBox from "../components/PostBox";
import { useNavigation } from "react-navigation-hooks";
import CreatePostButton from "../components/CreatePostButton";
import CategoriesButtons from "../components/CategoriesButtons";

// import { Container } from './styles';

export default function components() {
  const { navigate, goBack } = useNavigation();

  const Categories = [
    {
      id: "111",
      type: 0
    },
    {
      id: "22",
      type: 1
    },
    {
      id: "000",
      type: 4
    },
    {
      id: "333",
      type: 2
    },
    {
      id: "323",
      type: 3
    }
  ];

  const Posts = [
    {
      title: "Live Jorge e Mateus",
      description:
        "Uma live de quarentena da dupla sertaneja Jorge e Mateus, o show intitulado 'Na garagem' será exibido no dia 04/04/2020.",
      img_url:
        "https://s2.glbimg.com/MyTFljEzzkci5bzZqldn_PDTnZs=/0x0:847x441/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/L/x/2dVOkbRoAoA3hCAWJOsA/jorgeemateus-live.jpg",
      content_url:
        "https://g1.globo.com/pop-arte/musica/noticia/2020/04/05/jorge-e-mateus-fazem-live-com-mais-de-4-horas-de-duracao-foto-com-aglomeracao-nos-bastidores-chama-a-atencao.ghtml"
    },

    {
      title: "SAE Digital disponibiliza aulas de ensino fundamental e médio",
      description:
        " A SAE Digital disponibilizou uma solução completa de ensino a distância, composta por videoaulas, roteiros de atividades e ferramentas digitais de ensino e aprendizagem com os conteúdos previstos pela Base Nacional Comum Curricular (BNCC) e matriz do Exame Nacional do Ensino Médio (Enem).",
      img_url:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB128M0u.img?h=600&w=799&m=6&q=60&o=f&l=f&x=173&y=370",
      content_url:
        "https://www.msn.com/pt-br/noticias/educacao/sae-digital-disponibiliza-aulas-online-do-ensino-fundamental-e-m%c3%a9dio/ar-BB128YwQ"
    },

    {
      title:
        "Nutricionistas dão dicas de como manter alimentação saudável na quarentena",
      description:
        "Alimentação, corpo, emoções e mente equilibrados. Esse é o “cardápio” sugerido por especialistas para enfrentar o período de quarentena. Com o isolamento domiciliar, sentimentos como a ansiedade podem acabar sendo descontados na comida e contrariar uma alimentação saudável. A reportagem conversou com especialistas que prepararam um “guia” para os próximos dias em casa.",
      img_url:
        "https://www.otempo.com.br/image/contentid/policy:1.2319799:1585826885/WhatsApp%20Image%202020-04-02%20at%2008.23.25.jpeg?f=3x2&w=930&$p$f$w=8f906e8",
      content_url:
        "https://www.otempo.com.br/interessa/saude-e-ciencia/nutricionistas-dao-dicas-de-como-manter-alimentacao-saudavel-na-quarentena-1.2319791"
    },

    {
      title:
        "O que fazer durante a quarentena? Dez atividades online para se distrair",
      description:
        "A quarentena do coronavírus, período de reclusão recomendado pelos órgãos de saúde, está deixando adultos e crianças longe de seus afazeres por tempo indeterminado, até que o avanço da Covid-19 seja controlada. Para ocupar o tempo livre durante os dias de pandemia, é possível aproveitar soluções online que vão garantir entretenimento e, em alguns casos, conhecimento. Grandes empresas disponibilizaram cursos grátis, filmes e séries em streaming foram liberados sem custo e museus de vários países estão oferecendo visitas virtuais pelo computador especialmente para a temporada de isolamento.",
      img_url:
        "https://s2.glbimg.com/YQq91MBPVabpSNvKhQvKvJDZfLw=/0x0:695x353/1000x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2015/07/16/netflixm.jpg",
      content_url:
        "https://www.techtudo.com.br/listas/2020/03/o-que-fazer-durante-a-quarentena-dez-atividades-online-para-se-distrair.ghtml"
    },

    {
      title: "Quarentena: como manter a saúde mental em dia?",
      description:
        "Este artigo tem como objetivo ser um abraço cuidadoso em todos que já estão em casa, em quarentena, se isolando e cuidado de si para cuidar dos outros também. Vamos falar sobre o momento pelo qual o Brasil está passando e dar dicas valiosas sobre como preservar a sua saúde mental!",
      img_url: "https://www.vittude.com/blog/wp-content/uploads/Quarentena.jpg",
      content_url:
        "https://www.vittude.com/blog/quarentena-como-manter-a-saude-mental/"
    }
  ];

  return (
    <View style={styles.container}>
      <Header
        onPressOut={() => navigate("Login")}
        OnPressMyPosts={() => navigate("MyPosts")}
      />

      <View
        style={{
          justifyContent: "center"
        }}
      >
        <ScrollView
          style={{
            paddingTop: 20,
            width: "100%"
            // marginBottom: 45
          }}
        >
          <FlatList
            horizontal={true}
            style={{
              // height: 50,
              width: "100%",
              // position: "absolute",
              zIndex: 200000,
              // top: 70,
              // marginHorizontal: 20,
              backgroundColor: "transparent"
            }}
            data={Categories}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: 15 }}>
                <CategoriesButtons Categorie={item.type} />
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
          <View
            style={{
              paddingTop: 20,
              paddingHorizontal: 15,
              width: "100%",
              marginBottom: 45
            }}
          >
            {Posts.map(post => (
              <PostBox
                Img_url={post.img_url}
                Title={post.title}
                Description={post.description}
                OnPressContent={() => Linking.openURL(post.content_url)}
              />
            ))}
          </View>
        </ScrollView>

        <CreatePostButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageViewLogo: {
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});
