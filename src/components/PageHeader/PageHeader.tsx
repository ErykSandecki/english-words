// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';

// styles
import { ListWords as ListWordsStyled } from './ListWordsStyled';

const ListWords = () => {
  const words = useSelector((state) => state.words.data);

  return (
    <ListWordsStyled>
      {/* TABLE */}
      <div className="container demo">
        <table className="table table-no-more">
          <tbody>
            {[...words].reverse().map(({ english, polish }, index) => (
              <tr key={index}>
                <td>{english}</td>
                <td>{polish}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListWordsStyled>
  );
};

export default ListWords;
