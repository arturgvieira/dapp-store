import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { balanceActions, getAccountId } from 'state/balance';
import { transfersActions, getBestPath } from 'state/transfers';

import PurchaseMobi from './PurchaseMobi';

const mapStateToProps = createStructuredSelector({
  paymentPath: getBestPath,
  accountId: getAccountId,
});

const actions = {
  ...balanceActions,
  ...transfersActions,
};

export default connect(mapStateToProps, actions)(PurchaseMobi);