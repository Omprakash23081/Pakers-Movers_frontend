import { notFound } from 'next/navigation';

export default function DisabledCityRoute() {
  // This route is deprecated. All dynamic city routes are handled by [slug].
  notFound();
}
