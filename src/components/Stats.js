function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedItems * 100) / numItems);

  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go! 🛫"
          : `🛄 You have ${numItems} items on your list, and you already packed ${packedItems} (${packedPercent}%)`}
      </em>
    </footer>
  );
}

export default Stats;
