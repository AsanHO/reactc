import styled from "styled-components";

interface Iprice {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  border-radius: 15px;
`;
const Block = styled.div`
  background-color: lightgrey;
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 10px;
`;
function Price({ price }: any) {
  console.log(price);
  return (
    <Wrapper>
      <Block>
        <h1>1시간전: {price.quotes.USD.percent_change_1h} %</h1>
      </Block>
      <Block>
        <h1>6시간전: {price.quotes.USD.percent_change_6h} %</h1>
      </Block>
      <Block>
        <h1>12시간전: {price.quotes.USD.percent_change_12h} %</h1>
      </Block>
      <Block>
        <h1>1일전: {price.quotes.USD.percent_change_24h} %</h1>
      </Block>
      <Block>
        <h1>7일전: {price.quotes.USD.percent_change_7d} %</h1>
      </Block>
      <Block>
        <h1>30일전: {price.quotes.USD.percent_change_30d} %</h1>
      </Block>
      <Block>
        <h1>1년전: {price.quotes.USD.percent_change_1y} %</h1>
      </Block>
    </Wrapper>
  );
}

export default Price;
