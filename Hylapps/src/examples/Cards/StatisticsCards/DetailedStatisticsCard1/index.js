import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function DetailedStatisticsCard1({ vessel }) {
  // Ensure vessel data exists
  if (!vessel) {
    return null;
  }

  const { SpireTransportType, deadWeight, AIS } = vessel;

  return (
    <Card variant="outlined">
      <ArgonBox
        bgColor="white"
        variant="gradient"
        p={1}
        borderRadius="12px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
       
      >
        <Grid container spacing={1}>
          {/* Logo and Name */}
          <Grid item xs={12} lg={4} display="flex" flexDirection="column" alignItems="center">
            <img src="/Ship-logo.png" alt="Ship Logo" style={{ height: '95px',marginLeft:'-130px' }} />
            <ArgonTypography
              variant="h5"
              color="textPrimary"
              mt={0}
              fontWeight="600"
              textAlign="center"
              ml={-17}
            >
              {AIS?.NAME || 'N/A'}
            </ArgonTypography>
          </Grid>

          {/* Data Section */}
          <Grid item xs={12} lg={8} display="flex" justifyContent="center" alignItems="center">
            <Grid container spacing={2} justifyContent="center" alignItems="center">
             
              {/* IMO */}
              <Grid item xs={12} sm={3} display="flex" flexDirection="column" alignItems="left">
                <ArgonTypography variant="body2" color="textSecondary">
                  IMO
                </ArgonTypography>
                <ArgonTypography variant="h5" color="textPrimary" fontWeight="700" textAlign="left">
                  {AIS?.IMO || 'N/A'}
                </ArgonTypography>
              </Grid>
              {/* Deadweight */}
              <Grid item xs={12} sm={3} display="flex" flexDirection="column" alignItems="left">
                <ArgonTypography variant="body2" color="textSecondary">
                  DEADWEIGHT
                </ArgonTypography>
                <ArgonTypography variant="h5" color="textPrimary" fontWeight="700" textAlign="left">
                  {deadWeight || 'N/A'}
                </ArgonTypography>
              </Grid>
              {/* Callsign */}
              <Grid item xs={12} sm={3} display="flex" flexDirection="column" alignItems="left">
                <ArgonTypography variant="body2" color="textSecondary">
                  CALLSIGN
                </ArgonTypography>
                <ArgonTypography variant="h5" color="textPrimary" fontWeight="700" textAlign="left">
                  {AIS?.CALLSIGN || 'N/A'}
                </ArgonTypography>
              </Grid>
               {/* Type */}
               <Grid item xs={12} sm={3} display="flex" flexDirection="column" alignItems="left">
                <ArgonTypography variant="body2" color="textSecondary">
                  VESSEL TYPE
                </ArgonTypography>
                <ArgonTypography variant="h5" color="textPrimary" fontWeight="700" textAlign="left">
                  {SpireTransportType || 'N/A'}
                </ArgonTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ArgonBox>
    </Card>
  );
}

// Prop types validation
DetailedStatisticsCard1.propTypes = {
  vessel: PropTypes.shape({
    SpireTransportType: PropTypes.string,
    deadWeight: PropTypes.string,
    AIS: PropTypes.shape({
      NAME: PropTypes.string,
      IMO: PropTypes.string,
      CALLSIGN: PropTypes.string,
    }),
  }),
};

export default DetailedStatisticsCard1;