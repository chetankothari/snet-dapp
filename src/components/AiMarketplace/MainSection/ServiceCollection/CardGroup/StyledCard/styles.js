import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    width: 302,
    padding: "13px 0",
    margin: "0 25px 25px 0",
    display: "inline-block",
    "&:hover": {
      backgroundColor: theme.palette.text.offWhiteColor,
      "& h4": { color: theme.palette.text.primary },
    },
  },
  cardHeader: {
    padding: "0 18px",
  },
  cardTitle: {
    fontSize: 10,
    color: theme.palette.text.lightShadedGray,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  cardSubheader: {
    color: theme.palette.text.darkShadedGray,
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: 0.23,
    lineHeight: "23px",
    "& h4": { margin: "7px 0" },
  },
  CardMedia: {
    height: 175,
    margin: "5px 0 13px",
  },
  cardContent: { padding: "0 13px" },
  cardTypograpy: {
    color: theme.palette.text.mediumShadeGray,
    fontSize: 14,
    lineHeight: "20px",
  },
  cardActions: {
    padding: "16px 13px 0",
    justifyContent: "space-between",
    "& button": { padding: 0 },
  },
  showMore: {
    padding: 0,
    margin: 0,
    color: theme.palette.text.lightShadedGray,
  },
}));
