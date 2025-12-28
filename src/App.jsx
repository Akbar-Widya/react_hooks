import { useCallback, memo } from 'react';

const fetchedData=[
  {id:1, data:[1,2,3]},
  {id:2, data:[4,5,6]},
  {id:3, data:[7,8,9]},
];

export default function App({fetchedData}) {
  return (
    <>
      <ReportList items={fetchedData} />
    </>
  );
}

function ReportList({ items }) {
  return (
    <article>
      {items.map(item =>
        <Report key={item.id} item={item} />
      )}
    </article>
  );
}

function sendReport(item) {
  console.log('Sending report for item', item.id);
}

function Report({ item }) {
  // ✅ Call useCallback at the top level:
  // callback memoizes the function reference, aka create an ID. so it can be use on comparison between prev and next render
  const handleClick = useCallback(() => {
    sendReport(item)
  }, [item]);

  return (
    <figure>
      <Chart onClick={handleClick} />
    </figure>
  );
}

// memo tells to skip re-render on met condition
const Chart = memo(function Chart({ onClick }) {
  return (
    <div onClick={onClick} style={{width:100, height:100, backgroundColor:'lightblue', margin:'10px'}}>
      Chart (click me)
    </div>
  );
})