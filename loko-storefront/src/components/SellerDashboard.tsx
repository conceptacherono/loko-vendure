import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const SellerDashboard = () => {
  return (
    <DashboardContainer>
      <h1>Seller Dashboard</h1>
      <p>Manage your store, products, and orders here.</p>
    </DashboardContainer>
  );
};

export default SellerDashboard;
