import { Avatar, Table, TableBody, Tooltip } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "https://search-api.fie.future.net.uk/widget.php?id=review&model_name=xbox_one_s&area=GB"
    )
      .then(res => res.json())
      .then(data => setData(data.widget.data.offers));
  }, []);
  if (!data) return <p>Loading...</p>;

  return (
    <Table maxWidth="90vw" margin="auto" marginTop={40}>
      <Table.Head>
        <Table.TextHeaderCell>Product name</Table.TextHeaderCell>
        <Table.TextHeaderCell>Product price</Table.TextHeaderCell>
        <Table.TextHeaderCell>Link to merchant</Table.TextHeaderCell>
        <Table.TextHeaderCell>Merchant name</Table.TextHeaderCell>
        <Table.TextHeaderCell>Merchant logo</Table.TextHeaderCell>
        <Table.TextHeaderCell>Image</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body>
        {data.map(offer => (
          <TableRow
            key={offer.id}
            productName={offer.offer.name}
            productPrice={`${offer.offer.price} ${offer.offer.currency_iso}`}
            linkToMerchant={offer.merchant.url}
            merchantName={offer.merchant.name}
            merchantLogoURL={offer.merchant.logo_url}
          />
        ))}
      </Table.Body>
    </Table>
  );
}

const TableRow = ({
  id,
  productName,
  productPrice,
  linkToMerchant,
  merchantName,
  merchantLogoURL,
}) => {
  return (
    <Table.Row key={id}>
      <Table.TextCell>{productName}</Table.TextCell>
      <Table.TextCell>{productPrice}</Table.TextCell>
      <Table.TextCell>{linkToMerchant}</Table.TextCell>
      <Table.TextCell>{merchantName}</Table.TextCell>
      <Table.Cell>
        <Avatar src={merchantLogoURL} size={40} name={merchantName} />
      </Table.Cell>
      <Table.TextCell>Image</Table.TextCell>
    </Table.Row>
  );
};

export default App;
