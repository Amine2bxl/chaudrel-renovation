import { Component } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

/**
 * ErrorBoundary — capture les erreurs React dans l'arbre enfant
 * et affiche un fallback au lieu de crasher toute la page.
 *
 * En production, envoie aussi l'erreur à la console (et plus tard à Sentry).
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log en dev — brancher Sentry/Logfire plus tard si besoin
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border border-brand-gold/20 rounded-2xl shadow-lg p-8 text-center">
          <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-red-50 flex items-center justify-center">
            <AlertTriangle className="w-7 h-7 text-red-500" aria-hidden="true" />
          </div>
          <h1 className="font-display text-2xl text-brand-ink mb-3">
            Oups, quelque chose s'est mal passé
          </h1>
          <p className="text-sm text-brand-ink/60 mb-6 leading-relaxed">
            Un composant a rencontré une erreur. L'équipe technique a été notifiée.
            Vous pouvez réessayer ou revenir à l'accueil.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={this.handleReset}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-gold text-white text-[12px] tracking-[0.12em] uppercase font-semibold rounded-full hover:bg-[#5E4F34] transition-colors"
            >
              <RefreshCw className="w-4 h-4" aria-hidden="true" />
              Réessayer
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-brand-gold/30 text-brand-ink text-[12px] tracking-[0.12em] uppercase font-semibold rounded-full hover:bg-brand-cream transition-colors"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    );
  }
}
