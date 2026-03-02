"""Tests para la función validate_user del módulo autenticate."""

import pytest
from autenticate import validate_user
from autenticate import _hash_password


def _make_user_store(username: str, password: str) -> dict[str, str]:
    """Crea un user_store con un único usuario."""
    return {username: _hash_password(password)}


class TestValidateUser:
    """Tests de validación de usuario."""

    def test_usuario_valido_devuelve_true(self):
        """Usuario con credenciales correctas debe validar."""
        store = _make_user_store("juan", "mi_password123")
        assert validate_user("juan", "mi_password123", store) is True

    def test_password_incorrecta_devuelve_false(self):
        """Password incorrecta debe fallar la validación."""
        store = _make_user_store("juan", "password_correcta")
        assert validate_user("juan", "password_incorrecta", store) is False

    def test_usuario_inexistente_devuelve_false(self):
        """Usuario que no existe en el store debe fallar."""
        store = _make_user_store("juan", "secret")
        assert validate_user("otro_usuario", "secret", store) is False

    def test_usuario_vacio_devuelve_false(self):
        """Username vacío debe devolver False."""
        store = _make_user_store("juan", "secret")
        assert validate_user("", "secret", store) is False
        assert validate_user("   ", "secret", store) is False

    def test_password_vacia_devuelve_false(self):
        """Password vacía debe devolver False."""
        store = _make_user_store("juan", "secret")
        assert validate_user("juan", "", store) is False

    def test_password_menos_de_6_caracteres_devuelve_false(self):
        """Password con menos de 6 caracteres debe devolver False."""
        store = _make_user_store("juan", "123456")
        assert validate_user("juan", "12345", store) is False
        assert validate_user("juan", "1234", store) is False
        assert validate_user("juan", "123", store) is False

    def test_password_exactamente_6_caracteres_es_valida(self):
        """Password con exactamente 6 caracteres debe validar."""
        store = _make_user_store("juan", "123456")
        assert validate_user("juan", "123456", store) is True

    def test_store_vacio_devuelve_false(self):
        """Sin user_store o store vacío, cualquier credencial falla."""
        assert validate_user("admin", "cualquier_password") is False
        assert validate_user("admin", "cualquier_password", {}) is False

    def test_multiples_usuarios_valida_correctamente(self):
        """Con varios usuarios, valida solo el que corresponde."""
        store = {
            "alice": _hash_password("alice_pass"),
            "bob": _hash_password("bob_pass"),
        }
        assert validate_user("alice", "alice_pass", store) is True
        assert validate_user("bob", "bob_pass", store) is True
        assert validate_user("alice", "bob_pass", store) is False
        assert validate_user("bob", "alice_pass", store) is False

    def test_password_con_caracteres_especiales(self):
        """Contraseñas con caracteres especiales se validan correctamente."""
        store = _make_user_store("user", "P@ssw0rd!#$%&*()")
        assert validate_user("user", "P@ssw0rd!#$%&*()", store) is True
        assert validate_user("user", "P@ssw0rd", store) is False

    def test_usuario_case_sensitive(self):
        """La validación distingue mayúsculas y minúsculas en username."""
        store = _make_user_store("Admin", "secret")
        assert validate_user("Admin", "secret", store) is True
        assert validate_user("admin", "secret", store) is False

    def test_password_case_sensitive(self):
        """La validación distingue mayúsculas y minúsculas en password."""
        store = _make_user_store("user", "Secret123")
        assert validate_user("user", "Secret123", store) is True
        assert validate_user("user", "secret123", store) is False
