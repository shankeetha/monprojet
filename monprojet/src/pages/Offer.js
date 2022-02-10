const Offer = () => {
  return useEffect(() => {
    const fechData = async () => {
      const response = await axios.get(
        " https://lereacteur-vinted-api.herokuapp.com/offers"
      );
    };
    fetchData();
  }, []);
};

export default Offer;
