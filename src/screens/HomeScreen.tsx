import * as React from 'react';
import {Alert, Linking, NativeModules, StyleSheet, View} from 'react-native';
import {ColorPresets} from '../theme/color';
import {TextAtom} from '../components/atoms/TextAtom';
import {ButtonAtom} from '../components/atoms/ButtonAtom';
import {scalePresets} from '../theme/metrics';
import {GenericNavigation} from '../navigation/AppNavigation';
import {RouteKeys} from '../navigation/RouteKeys';

interface HomeScreenProps extends GenericNavigation {}

enum TrackingStatus {
  NotDetermined = 0,
  Restricted = 1,
  Denied = 2,
  Authorized = 3,
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [track, setTrack] = React.useState(0);
  const {AppTracking} = NativeModules;

  React.useEffect(() => {
    AppTracking.requestPermission((status: TrackingStatus) => {
      switch (status) {
        case TrackingStatus.NotDetermined:
          setTrack(TrackingStatus.NotDetermined);
          break;
        case TrackingStatus.Restricted:
          setTrack(TrackingStatus.Restricted);
          break;
        case TrackingStatus.Denied:
          setTrack(TrackingStatus.Denied);
          Alert.alert('Permission Error', 'Tracking permission Denied');
          break;
        case TrackingStatus.Authorized:
          setTrack(TrackingStatus.Authorized);
          break;
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {track === TrackingStatus.NotDetermined ||
      track === TrackingStatus.Denied ||
      track === TrackingStatus.NotDetermined ? (
        <>
          <TextAtom text="Please go ahead and grant the tracking permission in settings" />
          <ButtonAtom
            title="Go to Settings"
            onPress={() => Linking.openSettings()}
          />
        </>
      ) : (
        <>
          <TextAtom text="You are all set to move forward." />
          <ButtonAtom
            title="Continue"
            onPress={() => navigation.navigate(RouteKeys.SuccessScreen)}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPresets.white,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: scalePresets.baseScale,
  },
});
