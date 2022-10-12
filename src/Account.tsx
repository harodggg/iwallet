import React, { useEffect, useState } from 'react';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp'
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

type Props = {
    AllAccounts?: String;
    children?: React.ReactNode;
}
const Account = ({ AllAccounts, children }: Props) => {
    const [Accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
    useEffect(
        () => {
            const loadAccounts = () => {
                const asyncLoadAccounts = async () => {
                    try {
                        await web3Enable("harold");
                        let allAccounts = await web3Accounts();
                        setAccounts(allAccounts);
                        AllAccounts = await Accounts[0].address
                    } catch (e) {
                        console.log(e);
                    }
                }
                asyncLoadAccounts();
            }
            loadAccounts()
        },
        []
    )

    //  console.log(Accounts)
    //  Accounts?.forEach(account => console.log(account.toString()))
    console.log(typeof(AllAccounts));

    return <div>{AllAccounts}</div>
}

export default Account;

