import "./CountryPaginationControls.scss";

const CountryPaginationControls = ({
  darkMode,
  colors,
  goPrevPage,
  amountOfPages,
  goNextPage,
  pageNumber,
}) => {
  return (
    <div className="pagination">
      <button
        style={{
          color: darkMode ? colors.white : colors.black,
        }}
        onClick={goPrevPage}
      >
        Previous
      </button>
      <h3
        style={{
          color: darkMode ? colors.white : colors.black,
        }}
      >
        {pageNumber} of {amountOfPages}
      </h3>
      <button
        style={{
          color: darkMode ? colors.white : colors.black,
        }}
        onClick={goNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default CountryPaginationControls;
