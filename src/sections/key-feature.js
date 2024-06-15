/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Quality Workmanship',
    title: 'Quality Workmanship',
    text:
      'Since 2023 we’ve pride ourselves on highly quality workmanship and customer satisfaction.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Competitive Pricing',
    title: 'Competitive Pricing',
    text:
      'We guarantee the highest quality workmanship at competitive prices..',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Strategic Location',
    title: 'Strategic Location',
    text:
      'Fully Equipped workshop located at Klang.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Online Appointment',
    title: 'Online Appointment',
    text:
      'Fill out our Online Booking form and we’ll get back to you quickly!.',
  },
  {
    id: 5,
    imgSrc: Support,
    altText: 'Membership Program',
    title: 'Membership Program',
    text:
      'We offers reasonable and competitive point membership system to our customers.',
  },
];

export default function KeyFeature() {
  return (
   <section id="feature" sx={{ variant: 'section.keyFeature' }}>
     <Container>
       <SectionHeader 
        slogan="Why Basuhlah?"
        title="Does more than a customer could ask"
       />

       <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
