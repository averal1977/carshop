import React from 'react'
import AppProvider from './AppProvider';
import {useAppContextUi} from './AppProviderUi';
import Cliente from './Cliente';
import Vehiculo from './Vehiculo';
import Servicio from './Servicio';
import Orden from './Orden';

export const AppNavigate = () => {
    const {menu} = useAppContextUi();
    return (
        <div>
            <main>
                <div>
                    <AppProvider>
                        {
                            (menu.component === 1) ? <Cliente /> : 
                            (menu.component === 2) ? <Vehiculo /> : 
                            (menu.component === 3) ? <Servicio /> : <Orden />
                        }
                    </AppProvider>
                </div>
            </main>
        </div>
    )
}
