import React from 'react'
import {
  Target,
  Palette,
  Globe,
  FileText,
  Calendar,
  Camera,
  Video,
  Printer,
} from 'lucide-react'

type IconName =
  | 'target'
  | 'palette'
  | 'globe'
  | 'file-text'
  | 'calendar'
  | 'camera'
  | 'video'
  | 'printer'

export const getServiceIcon = (iconName: IconName | string, size = 32): React.ReactNode => {
  const iconMap: Record<IconName, React.ReactNode> = {
    target: <Target size={size} />,
    palette: <Palette size={size} />,
    globe: <Globe size={size} />,
    'file-text': <FileText size={size} />,
    calendar: <Calendar size={size} />,
    camera: <Camera size={size} />,
    video: <Video size={size} />,
    printer: <Printer size={size} />,
  }

  return iconMap[iconName as IconName] || <Target size={size} />
}

