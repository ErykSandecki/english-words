import { connect, Selector } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

// others
import { TInnerProps } from './App';

const mapStateToProps: Selector<any, any> = createStructuredSelector({});

export const enhanceApp = compose<TInnerProps, null>(
  connect(mapStateToProps, null)
);
