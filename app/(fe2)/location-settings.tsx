import { useState, useMemo } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';

type PermissionStatus = 'granted' | 'denied' | 'blocked' | 'undetermined';
type SharingMode = 'off' | 'friends' | 'timed';

const MOCK_PERMISSION: PermissionStatus = 'granted';

export default function LocationSettingsScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const [permission] = useState<PermissionStatus>(MOCK_PERMISSION);
  const [sharingEnabled, setSharingEnabled] = useState(true);
  const [sharingMode, setSharingMode] = useState<SharingMode>('friends');

  const handleRetry = () => Alert.alert(t('fe2.location.grant_permission'), '');
  const handleOpenSettings = () => Alert.alert(t('fe2.location.open_settings'), '');

  const MODE_KEYS: SharingMode[] = ['friends', 'timed', 'off'];
  const MODE_LABEL: Record<SharingMode, string> = {
    friends: t('fe2.location.mode_friends'),
    timed: t('fe2.location.mode_timed'),
    off: t('fe2.location.mode_off'),
  };
  const MODE_DESC: Record<SharingMode, string> = {
    friends: t('fe2.location.mode_friends_sub'),
    timed: t('fe2.location.mode_timed_sub'),
    off: t('fe2.location.mode_off_sub'),
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* === Quyền GPS === */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>{t('fe2.location.permission_section')}</Text>
        {permission === 'granted' && (
          <View style={styles.statusRow}>
            <View style={[styles.dot, { backgroundColor: colors.success }]} />
            <Text style={styles.statusText}>{t('fe2.location.granted')}</Text>
          </View>
        )}
        {permission === 'denied' && (
          <View>
            <View style={styles.statusRow}>
              <View style={[styles.dot, { backgroundColor: colors.danger }]} />
              <Text style={styles.statusText}>{t('fe2.location.denied')}</Text>
            </View>
            <Text style={styles.hint}>{t('fe2.location.denied_hint')}</Text>
            <TouchableOpacity style={styles.btnPrimary} onPress={handleRetry}>
              <Text style={styles.btnTextWhite}>{t('fe2.common.retry')}</Text>
            </TouchableOpacity>
          </View>
        )}
        {permission === 'blocked' && (
          <View>
            <View style={styles.statusRow}>
              <View style={[styles.dot, { backgroundColor: colors.warning }]} />
              <Text style={styles.statusText}>{t('fe2.location.blocked')}</Text>
            </View>
            <Text style={styles.hint}>{t('fe2.location.blocked_hint')}</Text>
            <TouchableOpacity style={styles.btnSecondary} onPress={handleOpenSettings}>
              <Text style={styles.btnTextDark}>{t('fe2.location.open_settings')}</Text>
            </TouchableOpacity>
          </View>
        )}
        {permission === 'undetermined' && (
          <View>
            <View style={styles.statusRow}>
              <View style={[styles.dot, { backgroundColor: colors.placeholder }]} />
              <Text style={styles.statusText}>{t('fe2.location.undetermined')}</Text>
            </View>
            <TouchableOpacity style={styles.btnPrimary} onPress={handleRetry}>
              <Text style={styles.btnTextWhite}>{t('fe2.location.grant_permission')}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* === Bật/tắt chia sẻ === */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>{t('fe2.location.sharing_section')}</Text>
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>{t('fe2.location.sharing_toggle_label')}</Text>
            <Text style={styles.sublabel}>{t('fe2.location.sharing_toggle_sub')}</Text>
          </View>
          <Switch value={sharingEnabled} onValueChange={setSharingEnabled} disabled={permission !== 'granted'} />
        </View>
      </View>

      {/* === Chế độ === */}
      {sharingEnabled && permission === 'granted' && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>{t('fe2.location.mode_section')}</Text>
          {MODE_KEYS.map((mode) => (
            <TouchableOpacity key={mode} style={styles.modeRow} onPress={() => setSharingMode(mode)}>
              <View style={[styles.radio, sharingMode === mode && { borderColor: colors.primary, backgroundColor: colors.primary }]} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.label}>{MODE_LABEL[mode]}</Text>
                <Text style={styles.sublabel}>{MODE_DESC[mode]}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* === Cảnh báo accuracy === */}
      <View style={[styles.card, { backgroundColor: colors.warningLight, borderWidth: 1, borderColor: colors.warning }]}>
        <Text style={[styles.sectionTitle, { color: colors.warning }]}>{t('fe2.location.accuracy_warn_title')}</Text>
        <Text style={[styles.hint, { color: colors.warning }]}>{t('fe2.location.accuracy_warn_body')}</Text>
      </View>
    </ScrollView>
  );
}

const makeStyles = (c: ReturnType<typeof import('../../hooks/useTheme').useTheme>['colors']) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: c.background },
    content: { padding: 16, gap: 12 },
    card: { backgroundColor: c.surface, borderRadius: 12, padding: 16, gap: 8 },
    sectionTitle: { fontSize: 16, fontWeight: '700', color: c.text, marginBottom: 4 },
    statusRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    dot: { width: 10, height: 10, borderRadius: 5 },
    statusText: { fontSize: 14, color: c.subtext },
    hint: { fontSize: 12, color: c.placeholder, lineHeight: 18, marginVertical: 6 },
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    label: { fontSize: 14, fontWeight: '600', color: c.text },
    sublabel: { fontSize: 12, color: c.placeholder, marginTop: 2 },
    modeRow: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 10, borderTopWidth: 1, borderTopColor: c.divider },
    radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: c.border, marginTop: 2 },
    btnPrimary: { backgroundColor: c.primary, borderRadius: 8, paddingVertical: 10, alignItems: 'center', marginTop: 8 },
    btnSecondary: { backgroundColor: c.surfaceAlt, borderRadius: 8, paddingVertical: 10, alignItems: 'center', marginTop: 8 },
    btnTextWhite: { color: '#fff', fontWeight: '700' },
    btnTextDark: { color: c.text, fontWeight: '700' },
  });
